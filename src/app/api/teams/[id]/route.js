import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Team from '@/models/Teams';

export const GET = async (request, { params }) => {
  // fetch team data from database
  const { id }  = params;

  // console.clear();
  // console.log('params');
  // console.log(params);
  // console.log('id of params');
  // console.log(id);

  try {
    await connectDB();
    const team = await Team.findById(id);
    console.log('database Teams loaded!');
    // console.log(team);
    return new NextResponse(JSON.stringify(team), { status: 200 });
    // return NextResponse.json('Database connected!', {status: 200});
  } catch (error) {
    return new NextResponse.json('Database error', { status: 500 });
  }

}
