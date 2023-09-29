import Teamstats from '@/models/Teamstats';
import Team from '@/models/Team';
import { NextResponse } from 'next/server';
// import mongoose from 'mongoose';

export const fetchTeamStatsFromApi = async (req, league, season) => {
  console.log('entered UPDATE')

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

    response.response.map(async (res, i) => {

      const newTeamstats = new Teamstats({
        name: res.season,
        teamName: res.team.name,
        team: await Team.findOne({ id_api: res.team.id }),
        id_team_api: res.team.id,
        conference: {
          name: res.conference.name,
          rank: res.conference.rank,
          win: res.conference.win,
          loss: res.conference.loss,
        },
        division: {
          name: res.division.name,
          rank: res.division.rank,
          win: res.division.win,
          loss: res.division.loss,
          gamesBehind: res.division.gamesBehind,
        },
        win: {
          home: res.win.home,
          away: res.win.away,
          total: res.win.total,
          percentage: res.win.percentage,
          lastTen: res.win.lastTen,
        },
        loss: {
          home: res.loss.home,
          away: res.loss.away,
          total: res.loss.total,
          percentage: res.loss.percentage,
          lastTen: res.loss.lastTen,
        },
        gamesBehind: res.gamesBehind,
        streak: res.streak,
        winStreak: res.winStreak,
        tieBreakerPoints: res.tieBreakerPoints,

      });
      await newTeamstats.save();
      // console.log('newSeasonteam', newSeasonteam);
      console.log(`${res.team.name} season:${res.season} saved!`);
      console.log(newTeamstats.team._id)

      const setter = {$push : {}}
      // setter.$set[`seasons.${res.season}.TeamStats`] = newTeamstats
      setter.$push["seasons.2022.TeamStats"] = newTeamstats

      console.log('setter', setter)
      // console.log('data', data)

      // await Team.findByIdAndUpdate( newTeamstats.team._id, setter)
      await Team.findByIdAndUpdate( newTeamstats.team._id, { $set: { [`seasons.2022.TeamStats`]: newTeamstats } })

      // await Team.findByIdAndUpdate( newTeamstats.team._id, { $set: { [`seasons.${res.season}.TeamStats`]: newTeamstats } })
      // await Team.findById(newSeasonteam.team._id).populate('seasons');

      // console.log(`${res.team.name._id} season:${res.season} updated!`)
    });


    return new NextResponse('teams stats has been created', { status: 201 })
  } catch (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 })
  }
}

export const updateTeamStats = async () => {
  console.log('entered updateTeamstats')
  const teamstats = await Teamstats.find();

  {teamstats.map(async (data) => {
    try {
      // const setter = {$push : {}}
      // setter.$push[`seasons.${data.name}.TeamStats`] = data

      // console.log('setter', setter)
      // console.log('data', data)

      // await Team.findOneAndUpdate({'id_api': data.id_team_api}, setter)
      await Team.findOneAndUpdate({'id_api': data.id_team_api}, { $set: { "seasons.2022.teamstats": data }})

      console.log(`${data.teamName} season:${data.name} updated!`)

    } catch (error) {
      console.error(error);
      // return new NextResponse(error.message, { status: 500 })
    }
  })}
  // // const season = await Seasonteam.find();

  // {
  //   teams.map(async (team) => {
  //     const seasonsData = await Seasonteam.find({ team: team._id });
  //     try {
  //       // await team.findById(team._id).populate(seasons: seasonsData);
  //       //  console.log('team', team);
  //       //  console.log('seasonsData', seasonsData);
  //       await team.updateMany({ _id: team._id }, { seasons: { $each: [seasonsData] } });
  //       return new NextResponse(`${team} stats has been created`, { status: 201 })
  //     } catch (error) {
  //       return new NextResponse(error.message, { status: 500 })
  //     }
  //   })
  // }
}
