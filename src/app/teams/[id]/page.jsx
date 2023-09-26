import Image from 'next/image'
import { Roboto_Condensed, Syne, Space_Grotesk } from 'next/font/google'

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

export default async function page({ params }) {
  const data = await getData(params.id);
  const color = (data.name).replace(/\s+/g, '');
  const nameUppercase = (data.name).toUpperCase();

  return (
    <>
      <div className={`h-[240px] `} style={{ background: `var(--${color})` }}>
        <div className=' w-[80%] m-auto flex justify-around overflow-hidden'>
          <Image src={data.logo} width='0' height='0' className='h-[240px] w-[240px]' />
          <div className='flex-1 flex flex-col justify-end pb-4'>
            <p className={`${syne.className} leading-none text-white`}>{data.conference}ern Conference - {data.division} division</p>
            <p className={`${robotoCondensed.className} text-[32px] leading-none text-white`}>{data.city}</p>
            <div className='flex gap-4'>
              <p className={`${robotoCondensed.className} font-bold text-[60px] leading-none text-white`}>{nameUppercase}</p>
              <p className={`${syne.className} font-bold text-[32px] leading-none tracking-[-0.2rem] align-middle text-gray-500`}>{data.code}</p>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}
