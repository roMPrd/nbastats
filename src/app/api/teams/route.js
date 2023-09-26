import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Team from '@/models/Teams';

import axios from "axios"
// import { useState } from 'react'


export const GET = async () => {
  // fetch team data from database

  try {
    await connectDB();
    const teams = await Team.find();
    if (teams.length === 0) {
      await POST();
      console.log('database Teams loaded!');
      return new NextResponse(JSON.stringify(teams), { status: 200 });
    }
    console.log('database Teams loaded!');
    return new NextResponse(JSON.stringify(teams), { status: 200 });
    // return NextResponse.json('Database connected!', {status: 200});
  } catch (error) {
    return new NextResponse.json('Database error', { status: 500 });
  }

}

export const POST = async () => {

  // const options = {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-host": "v2.nba.api-sports.io",
  //     "x-rapidapi-key": process.env.API_SPORTS_KEY
  //   }
  // };

  try {
    // const response = await axios.request(options);
    // const response = await fetch("https://api-nba-v1.p.rapidapi.com/teams", { options })
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

      await newTeam.save();
      console.log(`${team.code} saved!`);
    });


    return new NextResponse('team has been created', { status: 201 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }

}

export const UPDATE = async () => {

  const options = {
    method: 'GET',
    url: 'https://v2.nba.api-sports.io/teams',
    headers: {
      'X-RapidAPI-Key': process.env.API_SPORTS_KEY,
      'X-RapidAPI-Host': 'v2.nba.api-sports.io'
    }
  };

  try {
    // const response = await axios.request(options);
    const response = await fetch(options);
    // console.log(response.data.response);
    const updatedData = response.data.response.filter(
      data => data.nbaFranchise === true && data.leagues.standard.division != 'East'
    )
    await connectDB();

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
      console.log(`${team.code} saved!`);
    });


    return new response('team has been created', { status: 201 })
  } catch (error) {
    console.error(error);
    return new response(error.message, { status: 500 })
  }
}

export const DELETE = async () => {
  // delete team data from database
  try {
    await connectDB();
    await Team.deleteMany();
    return new NextResponse('team has been deleted', { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }
}
