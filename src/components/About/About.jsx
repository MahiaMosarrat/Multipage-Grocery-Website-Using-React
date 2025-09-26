import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
  
     <div className='py-25 text-center'>
                 <h1 className='md:text-5xl font-bold mt-5 mb-5'>About Us</h1>
                 <p className='text-zinc-800 max-w-[1000px] mx-auto text-lg mt-10 mb-10'>At Grocify, we believe that grocery shopping should be convenient, fast, and reliable. Whether you're stocking up your pantry, shopping for fresh produce, or looking for everyday essentials, Grocify brings the best of your local grocery store right to your fingertips.

                We partner with trusted suppliers and local vendors to deliver high-quality products at affordable prices, with a smooth shopping experience you can count on. From farm-fresh vegetables and fruits to dairy, snacks, beverages, and household items — we've got it all covered.</p>
                <Link to='/'><span className='bg-gradient-to-b from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-green-700 transition-all duration-300 cursor-pointer'>Back to Home</span></Link>
    </div>
   
  )
}

export default About
