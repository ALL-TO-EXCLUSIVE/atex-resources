"use client"
import { AlignCenter, AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const ListOfLink = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
]

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
    
  return (
    <nav className='w-full flex items-center justify-between text-[16px] font-[poppins] px-10 sm:px-24 h-[90px] z-20'>
        <Link href={"/"} className='underline underline-offset-4 z-50'>ATEX-RESOURCES</Link>
        <div className='hidden sm:flex items-center justify-center gap-5'>
            {
                ListOfLink.map((link,index)=>(
                    <Link className='hover:underline underline-offset-4 active:underline' href={link.link} key={index}> {link.name} </Link>
                ))
            }
        </div>
        <div className={`flex sm:hidden flex-col w-screen fixed top-0 left-0 z-30 transition-all bg-black ${showNavbar && 'left-[0%]' || 'left-[-100%]'}  h-screen items-center justify-center gap-5`}>
            {
                ListOfLink.map((link,index)=>(
                    <Link onClick={handleShowNavbar} className='hover:underline underline-offset-4 active:underline' href={link.link} key={index}> {link.name} </Link>
                ))
            }
        </div>
        <button  className={`sm:hidden text-4xl z-10  ${showNavbar && 'text-black' || 'text-white'}`} onClick={handleShowNavbar}>
      <AlignJustify/>
    </button>
        <button  className={`sm:hidden text-4xl z-50  ${showNavbar && 'visible' || 'hidden'}`} onClick={handleShowNavbar}>
      <X/>
    </button>
    </nav>
  )
}

export default Navbar