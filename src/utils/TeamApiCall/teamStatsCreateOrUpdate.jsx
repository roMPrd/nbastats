import { NextResponse } from 'next/server';
import prisma from '../prisma';


export const newFetchTeamStatsFromApi = async (req, league, season) => {
  console.log('entered newFetchTeamStatsFromApi')

  try {
    const response = await fetch(`https://v2.nba.api-sports.io/${req}?league=${league}&season=${season}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v2.nba.api-sports.io",
        "x-rapidapi-key": process.env.API_SPORTS_KEY
      }
    })
      .then(response => response.json())
    console.log('response', response.response);

    // await connectDB();

    response.response.map(async (res) => {
      console.log(`Updating ${res.team.name} season:${res.season}...`)

      await prisma.seasons.upsert({
        where: {
          unique_team_year: {
            year: res.season ,
            teamIdApi: res.team.id
          },
        },
        update: {
          Team: { connect: { idApi: res.team.id } },
          teamIdApi: res.team.id,
          teamName: res.team.name,
          year: res.season,
          conferenceRank: res.conference.rank,
          divisionRank: res.division.rank,
          gamesBehind: parseInt(res.gamesBehind),
          streak: res.streak,
          winStreak: res.winStreak,
          tieBreakerPoint: res.tieBreakerPoints,
          win: {
            set: {
              home: res.win.home,
              away: res.win.away,
              winTotal: res.win.total,
              winPct: res.win.percentage,
              lastTen: res.win.lastTen,
            }
          },
          loss: {
            set: {
              home: res.loss.home,
              away: res.loss.away,
              lossTotal: res.loss.total,
              lossPct: res.loss.percentage,
              lastTen: res.loss.lastTen,
            }
          },
        },
        create: {
          Team: { connect: { idApi: res.team.id } },
          teamIdApi: res.team.id,
          teamName: res.team.name,
          year: res.season,
          conferenceRank: res.conference.rank,
          divisionRank: res.division.rank,
          gamesBehind: parseInt(res.gamesBehind),
          streak: res.streak,
          winStreak: res.winStreak,
          tieBreakerPoint: res.tieBreakerPoints,
          win: {
            set: {
              home: res.win.home,
              away: res.win.away,
              winTotal: res.win.total,
              winPct: res.win.percentage,
              lastTen: res.win.lastTen,
            }
          },
          loss: {
            set: {
              home: res.loss.home,
              away: res.loss.away,
              lossTotal: res.loss.total,
              lossPct: res.loss.percentage,
              lastTen: res.loss.lastTen,
            }
          },
        },
      });
      console.log(`${res.team.name} season:${res.season} updated!`)
    });

    return new NextResponse('Teams stats has been created', { status: 201 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }
}
