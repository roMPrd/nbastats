import { NextResponse } from 'next/server';
// import connectDB from '@/utils/connectDB';
// import Team from '@/models/Team';

import prisma from '@/utils/prisma';
import { newFetchTeamStatsFromApi } from '@/utils/TeamApiCall/teamStatsCreateOrUpdate';


export const GET = async (request, { params }) => {

  const { id } = params;

  try {
    // await connectDB();
    // const team = await Team.findById(id).populate('seasons');

    const team = await prisma.team.findUnique({
      where: {
        id: id,
      },
    })

    if (!team.seasons) {
      console.log('Creating database Teams from API!');
      await newFetchTeamStatsFromApi('standings', 'standard', '2022');
      console.log('database TeamStats fetched from API!');
    } else {
      console.log('database TeamStats already exist!');
    }

    console.log('database Teams loaded!');
    // await Team.findById(id).populate('seasons');
    // const seasons = await Team.findById(id).populate('seasons');
    // console.log('seasons', seasons);


    return new NextResponse(JSON.stringify(team), { status: 200 });
  } catch (error) {
    return new NextResponse.json('Database error', { status: 500 });
  }

}
