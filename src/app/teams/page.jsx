'use client'

// import FetchTeamsApi from "@/utils/nbaApi/fetchAxios"
// import connectDB from "@/utils/db"
async function getData() {
  const response = await fetch ('http://localhost:3000/api/teams', {
  cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

async function postDB() {

  await fetch ('http://localhost:3000/api/teams', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
  });
}
async function deleteDB() {

  await fetch ('http://localhost:3000/api/teams', {
    method: 'DELETE',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
  });
}


const teams = async () => {
  const data = await getData();
  return (
    <>
      {/* <FetchTeamsApi /> */}
      <div>
        <button onClick={() => deleteDB()}>delete database</button>
        <button onClick={() => postDB()}>update database</button>
        {data && data.map((team, i) => (
          // team.nbaFranchise === true && team.leagues.standard.division != 'East' ? (
            <div key={i} className='flex justify-center items-center gap-2'>
              <h1>{i}</h1>
              {/* <h1>{team.id}</h1> */}
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
        }
      </div>
    </>
  )
}

export default teams
