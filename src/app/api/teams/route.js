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

  const options = {
    method: 'GET',
    url: ' https://v2.nba.api-sports.io/teams',
    headers: {
      'X-RapidAPI-Key': '8d2123f5eacf9d0834df13022facf84c',
      'X-RapidAPI-Host': 'v2.nba.api-sports.io'
    }
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data.response);
    const updatedData = response.data.response.filter(
      data => data.nbaFranchise === true && data.leagues.standard.division != 'East'
    )
    await connectDB();

    updatedData.map(async (team, i) => {
      const newTeam = new Team({
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


    return new response('team has been created', { status: 201 })
  } catch (error) {
    console.error(error);
    return new response(error.message, { status: 500 })
  }

}

export const PUT = async () => {
  // update team data in database
  // return new NextResponse('team has been updated', { status: 200 })
}

export const DELETE = async () => {
  // delete team data from database
  try {
    await connectDB();
    await Team.deleteMany();
    return new NextResponse('team has been deleted', { status: 200 })
  } catch (error) {
    console.error(error);
    return new response(error.message, { status: 500 })
  }
}
