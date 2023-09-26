'use client'

import axios from "axios";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

// import FetchTeamsApi from "@/utils/nbaApi/fetchAxios"
// import connectDB from "@/utils/db"

export default function Teams() {

  const [teams, setTeams] = useState([]);

  //axios fetching

  useEffect(() => {
    axios.get('http://localhost:3000/api/teams')
      .then(response => {
        setTeams(response.data);
      }
      )
      .catch(error => {
        console.error(error);
      });
  }, [setTeams]);

  const Teams = (key, logo, city, name, code) => {
    console.clear()
    console.log(key)
    console.log(logo)
    console.log(city)
    console.log(name)
    console.log(code)
    return (
      <div key={key} className='flex justify-center items-center gap-2'>
        {/* <Image src={data.logo} alt="" className='h-4' /> */}
        <img src={key.logo} alt="" className='h-4' />
        <p>{key.city}</p>
        <h1>{key.name}</h1>
        <p>{key.code}</p>
      </div>
    )
  }

  return (
    <div className=''>
      <div id='east'>
        <div id='atlantic'>
          <Suspense fallback={<div>Loading...</div>}>
            <h1>ATLANTIC</h1>
            {teams && teams.map((team, i) => (
              team.division === 'Atlantic' ? (
                // console.log(team)
                <Teams key={team._id} logo={team.logo} city={team.city} name={team.name} code={team.code} />
              ) : (null)
            ))
            }
          </Suspense>
        </div>
        <div id='central'>
          <h1>CENTRAL</h1>
          {teams && teams.map((team, i) => (
            team.division === 'Central' ? (
              <Teams key={team._id} logo={team.logo} city={team.city} name={team.name} code={team.code} />
            ) : (null)
          ))
          }
        </div>
        <div id='southeast'>
          <h1>SOUTHEAST</h1>
          {teams && teams.map((team, i) => (
            team.division === 'Southeast' ? (
              <Teams key={team._id} logo={team.logo} city={team.city} name={team.name} code={team.code} />
            ) : (null)
          ))
          }
        </div>
      </div>
      <div id='west'>
        <div id='northwest'>
          <h1>NORTHWEST</h1>
          {teams && teams.map((team, i) => (
            team.division === 'Northwest' ? (
              <Teams key={team._id} logo={team.logo} city={team.city} name={team.name} code={team.code} />
            ) : (null)
          ))
          }
        </div>
        <div id='pacific'>
          <h1>PACIFIC</h1>
          {teams && teams.map((team, i) => (
            team.division === 'Pacific' ? (
              <Teams key={team._id} logo={team.logo} city={team.city} name={team.name} code={team.code} />
            ) : (null)
          ))
          }
        </div>
        <div id='southwest'>
          <h1>SOUTHWEST</h1>
          {teams && teams.map((team, i) => (
            team.division === 'Southwest' ? (
              <Teams key={team._id} logo={team.logo} city={team.city} name={team.name} code={team.code} />
            ) : (null)
          ))
          }
        </div>
      </div>
      {/* {teams && teams.map((team, i) => (
        // team.nbaFranchise === true && team.leagues.standard.division != 'East' ? (

        <div key={i} className='flex justify-center items-center gap-2'>
          <h1>{i}</h1>
          <h1>{team._id}</h1>
          <h1>{team.name}</h1>
          <p>{team.city}</p>
          <p>{team.code}</p>
          <img src={team.logo} alt="" className='h-4' />
          <p>{team.conference}</p>
          <p>{team.division}</p>
        </div>
        // ) : (null)
      ))
      } */}
    </div>
  )
}

// async function getData() {
//   const response = await fetch('http://localhost:3000/api/teams', {
//     cache: 'no-store',
//   });

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }

//   return response.json();
// }

// async function postDB() {

//   await fetch('http://localhost:3000/api/teams', {
//     method: 'POST',
//     // headers: {
//     //   'Content-Type': 'application/json'
//     // },
//   });
// }
// async function deleteDB() {

//   await fetch('http://localhost:3000/api/teams', {
//     method: 'DELETE',
//     // headers: {
//     //   'Content-Type': 'application/json'
//     // },
//   });
// }


// const teams = async () => {
//   const data = await getData();
//   return (
//     <>
//       {/* <FetchTeamsApi /> */}
//       <div>
//         <button onClick={() => deleteDB()}>delete database</button>
//         <button onClick={() => postDB()}>update database</button>
//         {data && data.map((team, i) => (
//           // team.nbaFranchise === true && team.leagues.standard.division != 'East' ? (
//           <div key={i} className='flex justify-center items-center gap-2'>
//             <h1>{i}</h1>
//             {/* <h1>{team.id}</h1> */}
//             <h1>{team._id}</h1>
//             <h1>{team.name}</h1>
//             <p>{team.city}</p>
//             <p>{team.code}</p>
//             <img src={team.logo} alt="" className='h-4' />
//             <p>{team.conference}</p>
//             <p>{team.division}</p>
//           </div>
//           // ) : (null)
//         ))
//         }
//       </div>
//     </>
//   )
// }

// export default teams
