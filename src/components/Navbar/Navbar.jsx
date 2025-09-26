import React, { useEffect, useState } from 'react'
import { IoIosHeart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbMenu2,TbMenu3 } from "react-icons/tb";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  const [isScrolled,setIsScrolled]=useState(false);
  const toggleMenu=()=>{
    setShowMenu(!showMenu);
  }

  useEffect(()=>{
    const handleScroll=()=>{
      setIsScrolled(window.scrollY>10)
    }
    window.addEventListener('scroll',handleScroll);
    return()=> window.removeEventListener('scroll',handleScroll)
  },[])
  return (
      <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled?'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]': ''}`}>
        <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
            <Link to='/' className='text-3xl font-bold'><span className='text-green-400 '>G</span>rocify</Link>
            {/*Desktop Menu */}
            <ul className='md:flex items-center gap-x-10 hidden'>
                <li><a href='#' className='font-semibold tracking-wider text-green-500'>Home</a></li>
                <li><a href='/about' className='font-semibold tracking-wider text-Xinc-800 hover:text-green-500'>About Us</a></li>
                <li><a href='/process' className='font-semibold tracking-wider text-Xinc-800 hover:text-green-500'>Process</a></li> 
                <li><a href='/contact-us' className='font-semibold tracking-wider text-Xinc-800 hover:text-green-500' >Contact Us</a></li>
            </ul>
            {/* Nav-Action */}
            <div className='flex intems-center gap-x-5'>
              {/* input filed */}
              <div className='md:flex p-1 border-2 border-green-500 rounded-full hidden'>
                <input type="text" name="text" id="text" placeholder='Serach...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                <button className='bg-gradient-to-b from-green-700 to-emerald-500 text-white w-10 h-10 flex justify-center items-center rounded-full'><FaSearch /></button>
              </div>
              <a href='#' className=' text-zinc-700 text-2xl hover:text-green-800 flex items-center'><IoIosHeart /></a>
              <a href='#' className=' text-zinc-700 text-2xl hover:text-green-800 flex items-center'><HiMiniShoppingBag /></a>
              {/* hamburger */}
              <a href='#' className='text-zinc-700 text-2xl hover:text-green-800 flex items-center md:hidden' onClick={toggleMenu}>{showMenu?<TbMenu3 />:<TbMenu2 />}</a>
            </div>
            {/* Mobile menu */}
            <ul className={`flex flex-col gap-y-12 bg-green-300/10 backdrop-blur-xl rounded-xl p-10 shadow-xl items-center gap-x-10 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transitin-all duration-500 ${showMenu?'left-1/2' : ""}`}>
                <li><a href='#' className='font-semibold tracking-wider text-green-500'>Home</a></li>
                <li><a href='#' className='font-semibold tracking-wider text-Xinc-800 hover:text-green-500'>About Us</a></li>
                <li><a href='#' className='font-semibold tracking-wider text-Xinc-800 hover:text-green-500'>Process</a></li> 
                <li><a href='#' className='font-semibold tracking-wider text-Xinc-800 hover:text-green-500' >Contact Us</a></li>
                 <li className='flex p-1 border-2 border-green-500 rounded-full md:hidden'>
                <input type="text" name="text" id="text" placeholder='Serach...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
                <button className='bg-gradient-to-b from-green-700 to-emerald-500 text-white w-10 h-10 flex justify-center items-center rounded-full'><FaSearch /></button>
              </li>
            </ul>
        </nav>
      </header>
  )
}

export default Navbar
