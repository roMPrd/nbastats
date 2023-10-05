import { NextResponse } from 'next/server';
import prisma from '../prisma';

export const newFetchTeamFromApi = async () => {
  console.log('entered newFetchTeamFromApi')

  try {

    const response = await fetch("https://v2.nba.api-sports.io/teams", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v2.nba.api-sports.io",
        "x-rapidapi-key": process.env.API_SPORTS_KEY
      }
    })
    .then(response => response.json())

    // console.log('response', response.response);
    const updatedData = response.response.filter(
      data => data.nbaFranchise === true && data.leagues.standard.division != 'East'
    )

    updatedData.map(async (team, i) => {
      await prisma.team.upsert({
        where: { idApi: team.id },
        update: {
        },
        create: {
          idApi: team.id,
          name: team.nickname,
          city: team.city,
          code: team.code,
          logo: `/images/logos/${team.nickname}.svg`,
          division: team.leagues.standard.division,
          conference: team.leagues.standard.conference,
          seasons: {},
        },
      });
      console.log(`${team.code} saved!`);

    });

    return new NextResponse('teams has been created/updated', { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }
}
