import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20'>
      <div className='flex flex-wrap max-w-[1400px] mx-auto px-10 gap-10'>
        <div className='flex-1 basis-[300px]'>
             <a href='#' className='text-3xl font-bold'><span className='text-green-400 '>G</span>rocify</a>
            <p className='text-zinc-600 mt-6 max-w-[300px]'>  
                Your go-to online grocery store for fresh, affordable, and fast-delivered essentials right to your doorstep.
            </p>
            <p className='text-zinc-800 mt-6'>
                2025 &copy;All Rights Reserved
            </p>
        </div>
        <ul className='flex-1'>
            <li>
                <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
            </li>
            <li className='mt-6'>
                <a href="#" className='text-zinc-800 hover:text-green-500'>About</a>
            </li>
             <li className='mt-6'>
                <a href="#" className='text-zinc-800 hover:text-green-500'>FAQs</a>
            </li>
        </ul>
        <ul className='flex-1'>
            <li>
                <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
            </li>
            <li className='mt-6'>
                <a href="#" className='text-zinc-800 hover:text-green-500'>Support Center</a>
            </li>
             <li className='mt-6'>
                <a href="#" className='text-zinc-800 hover:text-green-500'>Feedback</a>
            </li>
             <li className='mt-6'>
                <a href="#" className='text-zinc-800 hover:text-green-500'>Contact Us</a>
            </li>
        </ul>
        <div className='flex-1'>
            <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
            <p className='mt-6 text-zinc-600'>
                Questions or Feedbacks?<br />
                We'd love to hear from you.
            </p>
            <div className='flex bg-white p-1 rounded-lg mt-6'>
                <input type="email" name='email' id='email' autoComplete='off' placeholder='Email Address' className='h-[5vh] pl-4 flex-1 focus:outline-none'/>
                <button className='bg-gradient-to-b from-green-400 to-green-500 p-2 rounded-lg text-white text-2xl hover:to-green-600 cursor-pointer'>
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
