import { NextResponse } from 'next/server';
import connectDB from '@/utils/connectDB';
import Team from '@/models/Team';

export const GET = async (request, { params }) => {

  const { id } = params;

  try {
    await connectDB();
    const team = await Team.findById(id).populate('seasons');;
    console.log('database Teams loaded!');
    // await Team.findById(id).populate('seasons');
    // const seasons = await Team.findById(id).populate('seasons');
    // console.log('seasons', seasons);


    return new NextResponse(JSON.stringify(team), { status: 200 });
  } catch (error) {
    return new NextResponse.json('Database error', { status: 500 });
  }

}
