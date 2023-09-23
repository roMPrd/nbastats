import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Roboto_Condensed, Syne, Space_Grotesk } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <div className={`${robotoCondensed.className} font-bold flex justify-between items-center`}>

      <Link href='/' className='flex items-center gap-1'>
        <Image src='/images/logo-black.png' alt='logo' width={30} height={30} />
        <h1>NBASTATS</h1>
      </Link>

      <div className='flex gap-2'>
        <ul>
          <Link href="/">HOME</Link>
        </ul>
        <ul>
          <Link href="/teams">TEAMS</Link>
        </ul>
        <ul>
          <Link href="/players">PLAYERS</Link>
        </ul>
        <ul>
          <Link href="/stats">STATS</Link>
        </ul>
        <ul>
          <Link href="/standings">STANDINGS</Link>
        </ul>
        <ul>
          <Link href="/livescores">LIVESCORES</Link>
        </ul>
      </div>

      <div>
        <h1>MENU</h1>
      </div>

    </div>
  )
}

export default Navbar
