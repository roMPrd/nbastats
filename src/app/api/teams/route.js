import { NextResponse } from 'next/server';
// import connectDB from '@/utils/connectDB';
// import Team from '@/models/Team';
// import Seasonteam from '@/models/Seasonteam';
import { newFetchTeamFromApi } from '@/utils/TeamApiCall/teamCreateOrUpdate';
// import { fetchTeamStatsFromApi, updateTeamStats } from '@/utils/TeamApiCall/teamStats';

// import axios from "axios"
// import { useState } from 'react'

import prisma from '@/utils/prisma';

export const GET = async () => {
  // fetch team data from database

  try {
    // await connectDB();
    // const teams = await Team.find();
    // console.log('teams', teams);

    const teams = await prisma.team.findMany();
    // console.log('teams', teams);

    if (teams.length === 0) {
      console.log('Creating database Teams from API!');
      await newFetchTeamFromApi();
      console.log('database Teams fetched from API!');
      // return new NextResponse(JSON.stringify(teams), { status: 200 });
    } else {
      console.log('database Teams already exist!');
    }

    // if (teams[0].seasons.length === 0) {
    //   try {
    //     console.log('entered condition for stats')
    //     await fetchTeamStatsFromApi('standings', 'standard', '2022');
    //     console.log('database Stats Teams fetched from API!');
    //   } catch (error) {
    //     console.log('error', error)
    //   }
    // }
    // await fetchTeamStatsFromApi('standings', 'standard', '2022');
    // await updateTeamStats()

    console.log('database Teams loaded!');
    return new NextResponse(JSON.stringify(teams), { status: 200 });
    // return NextResponse.json('Database connected!', {status: 200});
  } catch (error) {
    return new NextResponse.json('Database error', { status: 500 });
  }

}

// export const POST = async () => {
//   console.log('entered POST')


//   // const options = {
//   //   "method": "GET",
//   //   "headers": {
//   //     "x-rapidapi-host": "v2.nba.api-sports.io",
//   //     "x-rapidapi-key": process.env.API_SPORTS_KEY
//   //   }
//   // };

//   try {
//     // const response = await axios.request(options);
//     // const response = await fetch("https://api-nba-v1.p.rapidapi.com/teams", { options })
//     const response = await fetch("https://v2.nba.api-sports.io/teams", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "v2.nba.api-sports.io",
//         "x-rapidapi-key": process.env.API_SPORTS_KEY
//       }
//     })
//     .then(response => response.json())
//     // const response = await fetch(options);
//     // console.log(response.data.response);
//     console.log('response', response.response);
//     const updatedData = response.response.filter(
//       data => data.nbaFranchise === true && data.leagues.standard.division != 'East'
//     )
//     await connectDB();

//     updatedData.map(async (team, i) => {
//       const newTeam = new Team({
//         id_api: team.id,
//         name: team.nickname,
//         city: team.city,
//         code: team.code,
//         logo: `/images/logos/${team.nickname}.svg`,
//         division: team.leagues.standard.division,
//         conference: team.leagues.standard.conference,
//       });
//       console.log('newTeam', newTeam);
//       await newTeam.save();
//       console.log(`${team.code} saved!`);
//     });


//     return new NextResponse('team has been created', { status: 201 })
//   } catch (error) {
//     console.error(error);
//     return new NextResponse(error.message, { status: 500 })
//   }

// }

// export const UPDATE = async (req, league, season) => {
//   console.log('entered UPDATE')


//   try {
//     const response = await fetch(`https://v2.nba.api-sports.io/${req}?league=${league}&season=${season}`, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "v2.nba.api-sports.io",
//         "x-rapidapi-key": process.env.API_SPORTS_KEY
//       }
//     })
//     .then(response => response.json())
//     console.log('response', response.response);

//     await connectDB();

//     response.map(async (res, i) => {

//       const newSeasonteam = new Seasonteam({
//         name: res.season,
//         teamName: res.team.name,
//         id_team_api: res.id,
//         conference: [{
//           name: res.conference.name,
//           rank: res.conference.rank,
//           win: res.conference.win,
//           loss: res.conference.loss,
//         }],
//         division: [{
//           name: res.division.name,
//           rank: res.division.rank,
//           win: res.division.win,
//           loss: res.division.loss,
//           gamesBehind: res.division.gamesBehind,
//         }],
//         win: [{
//           home: res.win.home,
//           away: res.win.away,
//           total: res.win.total,
//           percentage: res.win.percentage,
//           lastTen: res.win.lastTen,
//         }],
//         loss: [{
//           home: res.loss.home,
//           away: res.loss.away,
//           total: res.loss.total,
//           percentage: res.loss.percentage,
//           lastTen: res.loss.lastTen,
//         }],
//         gamesBehind: res.gamesBehind,
//         streak: res.streak,
//         winStreak: res.winStreak,
//         tieBreakerPoints: res.tieBreakerPoints,

//       });

//       await newSeasonteam.save();
//       console.log(`${res.team.name} season:${res.season} saved!`);

//     });


//     return new response('team has been created', { status: 201 })
//   } catch (error) {
//     console.error(error);
//     return new response(error.message, { status: 500 })
//   }
// }

// export const DELETE = async () => {
//   // delete team data from database
//   try {
//     await connectDB();
//     await Team.deleteMany();
//     return new NextResponse('team has been deleted', { status: 200 })
//   } catch (error) {
//     console.error(error);
//     return new NextResponse(error.message, { status: 500 })
//   }
// }
