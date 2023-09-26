"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { Roboto_Condensed, Syne, Space_Grotesk } from 'next/font/google'
// import { UPDATE } from '@/app/api/teams/route'
// import { update } from '@/utils/mongodb/RefreshDB'

// const currentPage = useRouter()


const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const Navbar = () => {
  const currentPage = usePathname()
  console.log(currentPage)
  return (
    <div className={`${robotoCondensed.className} absolute sticky z-50 inset-0 text-xl backdrop-blur-lg shadow-lg px-2 font-bold flex justify-between items-center h-12`}>

      <Link href='/' className='flex items-center'>
        <Image src='/images/logo-black.png' alt='logo' width={0} height={0} sizes='1.5rem' style={{ width: '1.5rem', height: 'auto' }} />
        <h1>NBASTATS</h1>
      </Link>

      <div className='flex gap-2'>
        <ul>
          <Link href="/teams" className={`${currentPage === "/teams" ? "text-orange-500" : ""} border-[1px] border-transparent hover:border-orange-500 rounded p-1 `}>TEAMS</Link>
        </ul>
        <ul>
          <Link href="/players" className={`${currentPage === "/players" ? "text-orange-500" : ""} border-[1px] border-transparent hover:border-orange-500 rounded p-1 `}>PLAYERS</Link>
        </ul>
        <ul>
          <Link href="/stats" className={`${currentPage === "/stats" ? "text-orange-500" : ""} border-[1px] border-transparent hover:border-orange-500 rounded p-1 `}>STATS</Link>
        </ul>
        <ul>
          <Link href="/standings" className={`${currentPage === "/standings" ? "text-orange-500" : ""} border-[1px] border-transparent hover:border-orange-500 rounded p-1 `}>STANDINGS</Link>
        </ul>
        <ul>
          <Link href="/livescores" className={`${currentPage === "/livescores" ? "text-orange-500" : ""} border-[1px] border-transparent hover:border-orange-500 rounded p-1 `}>LIVESCORES</Link>
        </ul>
      </div>

      <div>
        {/* <button onClick={() => update()}>REFRESH DB</button> */}
      </div>

    </div>
  )
}

export default Navbar
