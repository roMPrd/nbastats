'use client'

import axios from "axios"
import { useEffect, useState } from 'react'

export default function FetchTeamsApi() {

  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    url: ' https://v2.nba.api-sports.io/teams',
    headers: {
      'X-RapidAPI-Key': '8d2123f5eacf9d0834df13022facf84c',
      'X-RapidAPI-Host': 'v2.nba.api-sports.io'
    }
  };

  async function fetchTeams() {
    console.log('entered fetchTeams');
    try {
      const response = await axios.request(options);
      console.log(response.data.response);
      const updatedData = response.data.response.filter (
        data => data.nbaFranchise === true && data.leagues.standard.division != 'East'
      )
      console.log(updatedData)
      setData(updatedData);
    } catch (error) {
      console.error(error);
    }
    // console.log('entered fetchTeams');
    // axios.get('https://api-nba-v1.p.rapidapi.com/teams', params:{options})
    // .then(response => {
    //   console.clear();
    //   console.log(response.data);
    //   setTeams(response.data);
    // })
    // .catch(error => {
    //   console.error(error);
    // });
  }

  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <h1>TEAMS</h1>
      <button onClick={() => fetchTeams()}>refresh</button>
      {data && data.map((team, i) => (
        // team.nbaFranchise === true && team.leagues.standard.division != 'East' ? (
          <div key={i} className='flex gap-2'>
            <h1>{i}</h1>
            <h1>{team.id}</h1>
            <h1>{team.name}</h1>
            <h1>{team.nickname}</h1>
            <p>{team.city}</p>
            <p>{team.code}</p>
            <p>{team.leagues.standard.conference}</p>
            <p>{team.leagues.standard.division}</p>
          </div>
        // ) : (null)
      ))}
    </div>
  )
}
