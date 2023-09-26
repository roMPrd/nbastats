export async function getData(id) {
  // console.log(id)
  const response = await fetch(`http://localhost:3000/api/teams/${id}`,
    { cache: "no-cache" },
    //  {method: "GET"}
  );
  // console.log(response.json)
  return response.json();
}

export default async function page({params}) {
  const data = await getData(params.id);
  // console.log(data)
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.city}</h1>
      <h1>{data.code}</h1>
      <img src={data.logo} alt="" className='h-4' />
      <h1>{data.conference}</h1>
      <h1>{data.division}</h1>
    </div>
  )
}
