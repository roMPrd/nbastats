// import connectDB from '@/utils/connectDB';
import Team from '@/models/Team';
import { NextResponse } from 'next/server';

export const fetchTeamFromApi = async () => {
  console.log('entered fetchTeamFromApi')

  try {
    // await connectDB();

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
      const newTeam = new Team({
        id_api: team.id,
        name: team.nickname,
        city: team.city,
        code: team.code,
        logo: `/images/logos/${team.nickname}.svg`,
        division: team.leagues.standard.division,
        conference: team.leagues.standard.conference,
      });
      console.log('newTeam', newTeam);
      await newTeam.save();
      console.log(`${team.code} saved!`);
    });


    return new NextResponse('team has been created', { status: 201 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }
}
