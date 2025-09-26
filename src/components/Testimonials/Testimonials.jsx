import React from 'react'
import Heading from '../Heading/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import customer1 from '../../assets/customer-1.png'
import customer2 from '../../assets/customer-2.png'
import customer3 from '../../assets/customer-3.jpg'
import customer4 from '../../assets/customer-4.jpg'
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    
  return (
    <section>
      <div className='max-w-[1400px] px-10 mx-auto py-20'>
        <Heading highlight="Customer" heading="Review"/>

        <div className='flex justify-end mt-6 py-5 gap-x-3'>
            <button className='custom-prev text-2xl text-zinc-400 rounded-lg w-8 h-8 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-green-400 to-green-500 hover:text-white cursor-pointer'>
                <IoIosArrowBack />
            </button>
            <button className='custom-next text-2xl text-zinc-400 rounded-lg w-8 h-8 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-green-400 to-green-500 hover:text-white cursor-pointer'>
                <IoIosArrowForward />
            </button>
        </div>

        <Swiper navigation={
            {
                nextEl:".custom-next",
                prevEl:".custom-prev"
            }} 
            loop={true}
            breakpoints={{
                640:{slidesPerView:1,spaceBetween:20},
                768:{slidesPerView:2,spaceBetween:20},
                1024:{slidesPerView:3,spaceBetween:20},
            }}
        modules={[Navigation]} className="mySwiper">
        {
            review.map(item=>{
                return(
                      <SwiperSlide className='bg-zinc-100 rounded-xl p-8'>
            <div className='flex gap-5 items-center'>
                <div className='w-16 h-16 rounded-full bg-red-500 outline-2 outline-green-500 outline-offset-4 overflow-hidden'>
                    <img src={item.image} className='w-full h-full'/>
                </div>
                <div>
                    <h5 className='text-xl font-bold'>{item.name}</h5>
                    <p className='text-zinc-600'>{item.profession}</p>
                    <span className='flex text-yellow-400 text-xl gap-1'>
                        {Array.from({length:item.rating},(_,index)=>(
                            <FaStar/>
                        ))}
                    </span>
                </div>
            </div>    
                <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600'>
                        {item.para}
                    </p>
                </div>        
        </SwiperSlide>

                )
            })
        }
        
      </Swiper>

      
      </div>
    </section>
  )
}

export default Testimonials
const review=[
    {
        id:1,
        name:'Emaily Jhonson',
        profession:'Food Blogger',
        rating:3,
        para:'I love creating recipes with seasonal, vibrant ingredients — and this site never disappoints. Their product quality and packaging are top-notch. It is my secret to staying consistent with content and cooking!',
        image:customer1,
    },
    {
        id:2,
        name:'David Smith',
        profession:'Chef',
        rating:4,
        para:'As a professional chef, freshness is non-negotiable. This platform consistently delivers top-quality produce and pantry staples that meet restaurant standards. Reliable, fast, and always fresh — I am impressed!',
        image:customer2,
    },
    {
        id:3,
        name:'Alya Azhar',
        profession:'Home Maker',
        rating:5,
        para:'I used to spend hours grocery shopping every week. Now, I get everything I need — from fruits to cleaning supplies — delivered right to my kitchen. It is convenient, affordable, and saves me so much time!',
        image:customer3,
    },
    {
        id:4,
        name:'Carlos Mendas',
        profession:'Fitness Coach',
        rating:4,
        para:'Nutrition starts with good ingredients. I count on this platform for fresh veggies, lean proteins, and clean-label snacks. Its a game-changer for my diet and for the clients I coach every day.',
        image:customer4,
    },
]