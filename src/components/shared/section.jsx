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

const Section = (
  props
) => {
  return (
    <section className='w-[80%] py-4 m-auto flex flex-col gap-4'>
      <div className='w-full'>
        <h1 className={`${syne.className} font-bold border-b border-black `}>{props.name}</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-16'>
        {props.children}
      </div>
    </section>
  )
}

export default Section
