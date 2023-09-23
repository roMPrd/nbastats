import Image from 'next/image'
import { Roboto_Condensed, Syne, Space_Grotesk } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const syne = Syne({
  // weight: ['300', '400', '700'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className={`${syne.className} flex flex-col justify-center items-center`}>
      <span className={`${syne.className} tracking-[-0.1em] text-[128px] leading-none font-bold`}>NBASTATS</span>
      <span className='text-[32px] leading-none'>All your teams, all your matches, all your stats</span>


      <div className='h-[600px] w-full '>
        <iframe
          src='https://my.spline.design/untitled-329c6a59361a900106d686f6eeda3441/'
          frameborder='0'
          width='100%'
          height='100%'>
        </iframe>
      </div>
    </div>

  )
}
