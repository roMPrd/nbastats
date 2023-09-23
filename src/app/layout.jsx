import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Background from '@/components/background/Background'
import './globals.css'
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

export const metadata = {
  title: 'NBA Stats',
  description: "All NBA stats you'll ever need",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={syne.className}
      // className='bg-normal-theme dark:bg-dark-theme bg-[length:100vw_100vh] bg-opacity-50'
      className='relative'
      >
        <Background />
        <Navbar className={`${syne.className}`} />

        {children}

        <Footer className={`${robotoCondensed.className}`} />

      </body>
    </html>
  )
}
