import Link from "next/link";
import { Roboto_Condensed, Syne, Space_Grotesk } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const syne = Syne({
  // weight: ['300', '400', '700'],
  subsets: ['latin']
})

const spaceGrotesk = Space_Grotesk({
  // weight: ['300', '400', '700'],
  subsets: ['latin']
})

const TeamCard = (props) => {
  // console.log(props.id)
  return (
    <Link
      href={`/teams/${props.id}`}
      // key={props.id}
      className='flex justify-start items-center text-center gap-1  hover:text-orange-500'>

      <div className='w-16 flex justify-center'>
        <img src={props.logo} alt="" className='h-12 w-auto' />
      </div>
      <p className={`${robotoCondensed.className} text-lg font-medium`}>{props.city}</p>
      <p className={`${robotoCondensed.className} text-lg font-medium`}>{props.name}</p>
      <p className={`${robotoCondensed.className} text-xs font-bold text-gray-500`}>{props.code}</p>

    </Link>
  )
}
export default TeamCard
