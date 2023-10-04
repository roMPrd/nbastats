import Image from 'next/image'
import { Roboto_Condensed, Syne, Space_Grotesk } from 'next/font/google'
import { Suspense } from 'react'

const syne = Syne({
  // weight: ['300', '400', '700'],
  subsets: ['latin']
})

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export async function getData(id) {
  // console.log(id)
  const response = await fetch(`http://localhost:3000/api/teams/${id}`,
    { cache: "no-cache" },
    //  {method: "GET"}
  );
  // console.log(response.json)
  return response.json();
}

function rank(number) {
  if (number === 1) {
    return '1st'
  } else if (number === 2) {
    return '2nd'
  } else if (number === 3) {
    return '3rd'
  } else {
    return `${number}th`
  }
}

export default async function page({ params }) {
  const data = await getData(params.id);
  const color = (data.name).replace(/\s+/g, '');
  const nameUppercase = (data.name).toUpperCase();
  // await Team.findById(params.id).populate('seasons');
  // await team.populate('seasons');
  // const season = data.seasons[0];
  // console.log('season', season)
  // console.log('data', data)
  // console.log('data.seasons', data.seasons)
  // console.log('data.seasons.name', data.seasons[0].name)

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={`relative h-[240px] overflow-hidden`} style={{ background: `var(--${color})` }}>
          <Image src={data.logo} width='0' height='0' className='z-10 absolute top-[25%] left-[50%] h-[500px] w-[500px] translate-x-[-50%] translate-y-[-50%] opacity-10' alt='logo-bg' />
          <div className='w-[80%] m-auto flex justify-around overflow-hidden'>
            <Image src={data.logo} width='0' height='0' className='z-20 h-[240px] w-[240px]' alt='logo' />
            <div className='z-20 flex-1 flex flex-col justify-end pb-4'>
              <p className={`${syne.className} text-white`}>{data.conference}ern Conference - {data.division} division</p>
              {/* <p className={`${robotoCondensed.className} text-white`}>{season?.conference.win} - {season?.conference.loss} | {rank(season?.conference.rank)} in {data.conference}</p> */}
              <p className={`${robotoCondensed.className} text-[32px] leading-none text-white`}>{data.city}</p>
              <div className='flex gap-4'>
                <p className={`${robotoCondensed.className} font-bold text-[60px] leading-none text-white`}>{nameUppercase}</p>
                <p className={`${syne.className} font-bold text-[32px] leading-none tracking-[-0.2rem] align-middle text-gray-500`}>{data.code}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${robotoCondensed.className} w-[80%] text-white py-1 m-auto flex flex-col gap-1`}>
          <div className='w-full h-[100px]'>
            <div className='flex w-[50%] h-full gap-1'>
              <div className='basis-1/4 flex flex-col justify-center items-center' style={{ background: `var(--${color})` }}>
                <p className='text-[16px]'>#rank</p>
                {/* <p className='text-[32px] font-bold'>{season?.conference.rank}</p> */}
              </div>
              <div className='basis-1/4 flex flex-col justify-center items-center' style={{ background: `var(--${color})` }}>
                <p className='text-[16px]'>win</p>
                {/* <p className='text-[32px] font-bold'>{season?.conference.win}</p> */}
              </div>
              <div className='basis-1/4 flex flex-col justify-center items-center' style={{ background: `var(--${color})` }}>
                <p className='text-[16px]'>loss</p>
                {/* <p className='text-[32px] font-bold'>{season?.conference.loss}</p> */}
              </div>
              <div className='basis-1/4 flex flex-col justify-center items-center' style={{ background: `var(--${color})` }}>
                <p className='text-[16px]'>win %</p>
                {/* <p className='text-[32px] font-bold'>{season?.conference.loss}</p> */}
              </div>
            </div>
            {/* <p>{data.seasons[0].name}</p> */}
          </div>
        </section>

        <div>
        </div>

      </Suspense>
    </>
  )
}
