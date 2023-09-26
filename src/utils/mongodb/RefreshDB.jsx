import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Team from '@/models/Teams';

async function update() {

  // const options = {
  //   method: 'GET',
  //   url: 'https://v2.nba.api-sports.io/teams',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.API_SPORTS_KEY,
  //     'X-RapidAPI-Host': 'v2.nba.api-sports.io'
  //   }
  // };

  try {
    // const response = await axios.request(options);
    console.log('initializing fetch for update...')

    const response = await fetch("https://v2.nba.api-sports.io/teams", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.API_SPORTS_KEY
      }
    })
    .then(response => response.json())
    // const response = await fetch(options);
    // console.log(response.data.response);
    console.log('response', response.response);
    const updatedData = response.response.filter(
      data => data.nbaFranchise === true && data.leagues.standard.division != 'East'
    )
    await connectDB();

    console.log('initializing update...')

    updatedData.map(async (team, i) => {

      await Team.findOneAndUpdate({ id_api: team.id }, {
        id_api: team.id,
        name: team.nickname,
        city: team.city,
        code: team.code,
        logo: `/images/logos/${team.nickname}.svg`,
        division: team.leagues.standard.division,
        conference: team.leagues.standard.conference,
      }).save();

      // await Team.save();
      console.log(`${team.code} updated!`);
    });


    return new NextResponse('teams have been updated', { status: 201 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }
}
export default update;
