import { NextResponse } from 'next/server'
import prisma from '@/utils/prisma';

export default async function playerCreateOrUpdate() {
  console.log('entered playerCreateOrUpdate')

  try {

    const response = await fetch(`https://v2.nba.api-sports.io/${req}?league=${league}&season=${season}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v2.nba.api-sports.io",
        "x-rapidapi-key": process.env.API_SPORTS_KEY
      }
    })
      .then(response => response.json())


    await Promise.all(
      response.response.map(async (res) => {
        await prisma.player.create({
          where: {},
          update: {},
          create: {}
        })
        console.log(`${res.name} season:${res.season} updated!`)
      })
    )

    return new NextResponse('Players has been created/updated', { status: 200 })
  } catch (error) {
    console.error('error', error);
    console.error('error message', error.message);
    return new NextResponse(error.message, { status: 500 })
  }



}
