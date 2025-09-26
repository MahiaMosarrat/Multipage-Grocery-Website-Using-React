import React from 'react'
import grocery from '../../assets/grocery.jpg'
import Button from '../Button/Button'
const Hero = () => {
  return (
   <section>
    <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-0 pt-25'>
        {/* hero content */}
        <div className='flex-1'>
            <span className='bg-green-400 text-neutral-50 font-semibold px-5 py-2 rounded-full'>Export Best Quality..</span>
            <h1 className='md:text-6xl font-bold mt-5'>Your Fresh Source for <span className='text-green-500 font-bold'>Organic</span> Goodness!</h1>
            <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-8'>we bring you a wide range of high-quality, fresh, and healthy grocery items, from organic produce to pantry essentials.</p>
              <Button content='Shop Now'/>
        </div>
        {/* hero image */}
        <div className='flex-1'>
            <img src={grocery} alt="Hero Image"/>
        </div>
    </div>
   </section>
  )
}

export default Hero
