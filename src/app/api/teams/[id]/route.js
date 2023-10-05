import { NextResponse } from 'next/server';
// import connectDB from '@/utils/connectDB';
// import Team from '@/models/Team';

import prisma from '@/utils/prisma';
import newFetchTeamStatsFromApi from '@/utils/TeamApiCall/teamStatsCreateOrUpdate';
import findUnique from '@/utils/prisma/dbQuerys';

// This gets called on every request
// export async function getServerSideProps(id) {
//   // Fetch data from external API
//   const response = await fetch(`http://localhost:3000/api/teams/${id}`,
//     { cache: "no-cache" },
//   );
//   // const res = await fetch(`https://.../data`)
//   const data = await response.json()

//   // Pass data to the page via props
//   return data
// }

// export default function Page({ data }) {
//   // Render data...
// }

export const GET = async (request, { params }) => {
  // console.log('request', request)
  const { id } = params;

  // try {
  // await connectDB();
  // const team = await Team.findById(id).populate('seasons');

  const team = await prisma.team.findUnique({
    where: {
      id: id,
    },
    include: {
      seasons: true,
    },
  })

  if (team.seasons.length === 0) {
    console.log('Creating database Teams from API!');
    await newFetchTeamStatsFromApi('standings', 'standard', '2022')
    console.log('database TeamStats fetched from API!');

    // const teamUpdated = await prisma.team.findUnique({
    //   where: {
    //     id: id,
    //   },
    //   include: {
    //     seasons: true,
    //   },
    // });

    // const teamUpdated = async () => {
    //   await newFetchTeamStatsFromApi('standings', 'standard', '2022')
    //   console.log('database TeamStats fetched from API!')
    //     .then(
    //       await findUnique(id, `${id}`, { seasons: true }),
    //       console.log('team updated!', teamUpdated)
    //     )
    //     .catch(error => console.log('error', error))
    // };

    const teamUpdated = await findUnique('id', `${id}`, { seasons: true })
    console.log('teamUpdated!', teamUpdated);
    return new NextResponse(JSON.stringify(teamUpdated), { status: 200 });
  } else {
    // console.log('team', team)
    console.log('database TeamStats already exist!');
    return new NextResponse(JSON.stringify(team), { status: 200 });
  }

  // console.log('database Teams loaded!');
  // await Team.findById(id).populate('seasons');
  // const seasons = await Team.findById(id).populate('seasons');
  // console.log('seasons', seasons);


  // return new NextResponse(JSON.stringify(team), { status: 200 });
  // } catch (error) {
  //   return new NextResponse.json('Database error', { status: 500 });
  // }

}
