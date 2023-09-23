import { Roboto_Condensed, Syne, Space_Grotesk } from 'next/font/google'

// const currentPage = useRouter()

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const Footer = () => {
  return (
    <div className={`${robotoCondensed.className} px-2 text-xs flex justify-center items-center h-12`}>
      Copyright © 2023 NBASTATS
    </div>
  )
}

export default Footer
