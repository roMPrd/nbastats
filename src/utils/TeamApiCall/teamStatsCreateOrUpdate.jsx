import { NextResponse } from 'next/server';
import prisma from '../prisma';


// export const newFetchTeamStatsFromApi = async (req, league, season) => {
//   console.log('entered newFetchTeamStatsFromApi')

//   try {
//     const response = await fetch(`https://v2.nba.api-sports.io/${req}?league=${league}&season=${season}`, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "v2.nba.api-sports.io",
//         "x-rapidapi-key": process.env.API_SPORTS_KEY
//       }
//     })
//       .then(response => response.json())
//     // console.log('response', response.response);

//     // await connectDB();

//     response.response.map(async (res) => {
//       // console.log(`Updating ${res.team.name} season:${res.season}...`)
//       // console.log('idApi', res.team.id)

//       // await prisma.team.update({
//       //   where: { idApi: res.team.id },
//       //   data: {
//       //     seasons: {
//       //       upsert: {
//       //         create: {
//       //           Team: { connect: { idApi: res.team.id } },
//       //           teamIdApi: res.team.id,
//       //           teamName: res.team.name,
//       //           year: res.season,
//       //           conferenceRank: res.conference.rank,
//       //           divisionRank: res.division.rank,
//       //           gamesBehind: parseInt(res.gamesBehind),
//       //           streak: res.streak,
//       //           winStreak: res.winStreak,
//       //           tieBreakerPoint: res.tieBreakerPoints,
//       //           win: {
//       //             set: {
//       //               home: res.win.home,
//       //               away: res.win.away,
//       //               winTotal: res.win.total,
//       //               winPct: res.win.percentage,
//       //               lastTen: res.win.lastTen,
//       //             }
//       //           },
//       //           loss: {
//       //             set: {
//       //               home: res.loss.home,
//       //               away: res.loss.away,
//       //               lossTotal: res.loss.total,
//       //               lossPct: res.loss.percentage,
//       //               lastTen: res.loss.lastTen,
//       //             }
//       //           },
//       //         },
//       //         update: {
//       //           seasons: {
//       //             Team: { connect: { idApi: res.team.id } },
//       //             teamIdApi: res.team.id,
//       //             teamName: res.team.name,
//       //             year: res.season,
//       //             conferenceRank: res.conference.rank,
//       //             divisionRank: res.division.rank,
//       //             gamesBehind: parseInt(res.gamesBehind),
//       //             streak: res.streak,
//       //             winStreak: res.winStreak,
//       //             tieBreakerPoint: res.tieBreakerPoints,
//       //             win: {
//       //               set: {
//       //                 home: res.win.home,
//       //                 away: res.win.away,
//       //                 winTotal: res.win.total,
//       //                 winPct: res.win.percentage,
//       //                 lastTen: res.win.lastTen,
//       //               }
//       //             },
//       //             loss: {
//       //               set: {
//       //                 home: res.loss.home,
//       //                 away: res.loss.away,
//       //                 lossTotal: res.loss.total,
//       //                 lossPct: res.loss.percentage,
//       //                 lastTen: res.loss.lastTen,
//       //               }
//       //             },
//       //           },
//       //         },
//       //       },
//       //     },
//       //   },
//       //   include: {
//       //     seasons: true,
//       //   },
//       // });

//       await prisma.seasons.upsert({
//         where: {
//           unique_team_year: {
//             year: res.season,
//             teamIdApi: res.team.id
//           },
//         },
//         update: {
//           Team: { connect: { idApi: res.team.id } },
//           teamIdApi: res.team.id,
//           teamName: res.team.name,
//           year: res.season,
//           conferenceRank: res.conference.rank,
//           divisionRank: res.division.rank,
//           gamesBehind: parseInt(res.gamesBehind),
//           streak: res.streak,
//           winStreak: res.winStreak,
//           tieBreakerPoint: res.tieBreakerPoints,
//           win: {
//             set: {
//               home: res.win.home,
//               away: res.win.away,
//               winTotal: res.win.total,
//               winPct: res.win.percentage,
//               lastTen: res.win.lastTen,
//             }
//           },
//           loss: {
//             set: {
//               home: res.loss.home,
//               away: res.loss.away,
//               lossTotal: res.loss.total,
//               lossPct: res.loss.percentage,
//               lastTen: res.loss.lastTen,
//             }
//           },
//           players: {},
//         },
//         create: {
//           Team: { connect: { idApi: res.team.id } },
//           teamIdApi: res.team.id,
//           teamName: res.team.name,
//           year: res.season,
//           conferenceRank: res.conference.rank,
//           divisionRank: res.division.rank,
//           gamesBehind: parseInt(res.gamesBehind),
//           streak: res.streak,
//           winStreak: res.winStreak,
//           tieBreakerPoint: res.tieBreakerPoints,
//           win: {
//             set: {
//               home: res.win.home,
//               away: res.win.away,
//               winTotal: res.win.total,
//               winPct: res.win.percentage,
//               lastTen: res.win.lastTen,
//             }
//           },
//           loss: {
//             set: {
//               home: res.loss.home,
//               away: res.loss.away,
//               lossTotal: res.loss.total,
//               lossPct: res.loss.percentage,
//               lastTen: res.loss.lastTen,
//             }
//           },
//           players: {},
//         },
//       });
//       console.log(`${res.team.name} season:${res.season} updated!`)

//       // try {
//       //   // await prisma.team.update({
//       //   //   where: { idApi: res.team.id },
//       //   //   data: {
//       //   //     seasons: {
//       //   //       connect: {
//       //   //         unique_team_year: {
//       //   //           year: res.season,
//       //   //           teamIdApi: res.team.id
//       //   //         },
//       //   //       }
//       //   //     }
//       //   //   },
//       //   //   include: {
//       //   //     seasons: true,
//       //   //   },
//       //   // })

//       //   // await prisma.team.upsert({
//       //   //   where: { idApi: res.team.id },
//       //   //   data: {
//       //   //     create: {
//       //   //       seasons: {
//       //   //         connect: {
//       //   //           unique_team_year: {
//       //   //             year: res.season,
//       //   //             teamIdApi: res.team.id
//       //   //           },
//       //   //         }
//       //   //       }
//       //   //     },
//       //   //     update: {
//       //   //       seasons: {
//       //   //         connect: {
//       //   //           unique_team_year: {
//       //   //             year: res.season,
//       //   //             teamIdApi: res.team.id
//       //   //           },
//       //   //         }
//       //   //       }
//       //   //     }
//       //   //   },
//       //   //   include: {
//       //   //     seasons: true,
//       //   //   },
//       //   // })

//       //   console.log(`${res.team.name} season:${res.season} connected!`)

//       // } catch (error) {
//       //   console.error(error);
//       // }



//       // const searchTeamRelation = await prisma.team.findUnique({
//       //   where: { idApi: res.team.id },
//       // })
//       // console.log('searchTeamRelation', searchTeamRelation);

//     });


//     return new NextResponse('Teams stats has been created', { status: 200 })
//   } catch (error) {
//     console.error(error);
//     return new NextResponse(error.message, { status: 500 })
//   }
// }

export default async function newFetchTeamStatsFromApi(req, league, season) {
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


    await Promise.all(

      response.response.map(async (res) => {
        await prisma.seasons.upsert({
          where: {
            unique_team_year: {
              year: res.season,
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
            players: {},
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
            players: {},
          },
        });
        console.log(`${res.team.name} season:${res.season} updated!`)
      })
    );
    
    return new NextResponse('Teams stats has been created', { status: 200 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }
}
