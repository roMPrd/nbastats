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

const SectionCard = (
  props
) => {
  return (
    <section className='w-[300px] flex flex-col gap-4 p-4 backdrop-blur-sm shadow-lg rounded'>
      <div className='w-full'>
        <p className={`${syne.className} text-orange-500 font-bold text-xs border-b  border-black`}>{props.name}</p>
      </div>
      <div className='flex flex-col justify-center gap-2'>
        {props.children}
      </div>
    </section>
  )
}

export default SectionCard
