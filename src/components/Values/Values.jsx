import React from 'react'
import Heading from '../Heading/Heading'
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiCodefresh } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiThymeleaf } from "react-icons/si";
import Basket from '../../assets/cart-veg.png';

const Values = () => {
    const leftValues=value.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex gap-5 items-center md:flex-row-reverse'>
                <div>
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-12 h-12 rounded-full '>{item.icon}</span>
                </div>
                <div className='md:text-right '>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zic-600 m-2'>{item.para}</p>
                </div>
            </div>
        )
    })
    const rightValues=value.slice(2).map(item=>{
        return(
            <div key={item.id} className='flex gap-5 items-center items-center'>
                <div >
                    <span className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-green-400 to-green-500 w-12 h-12 rounded-full '>{item.icon}</span>
                </div>
                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zic-600 m-2'>{item.para}</p>
                </div>
            </div>
        )
    })
  return (
    <section className='max-w-[1400px] mx-auto px-10 py-20'>
      <Heading highlight='Our' heading='Value'/>

      <div className='flex md:flex-row flex-col gap-5 md:gap-5 mt-8'>
        {/* Left value */}
        <div className='md:min-h-100 gap-5 flex flex-col justify-between'>
            {leftValues}
        </div>
        <div className='md:flex items-center hidden'>
            <img src={Basket}/>
        </div>
        {/*Right value */}
        <div className='md:min-h-100 gap-5 flex flex-col justify-between'>
              {rightValues}
        </div>
      </div>
    </section>
  )
}

export default Values

const value=[
    {
        id:1,
        title:'Trust',
        para:'We care about quality and your health. Every product we deliver is handpicked and comes from trusted local sources.',
        icon:<VscWorkspaceTrusted />
    },
    {
        id:2,
        title:'Always Fresh',
        para:'Freshness is our promise. From farm to doorstep, we ensure every item is delivered at its peak freshness.',
        icon:<SiCodefresh />
    },
     {
        id:3,
        title:'Food Safety',
        para:'All our groceries go through strict hygiene and safety checks—because your family deserves the best.',
        icon:<AiFillSafetyCertificate />
    },
    {
        id:4,
        title:'100% Organic',
        para:'From fruits to grains, we offer a wide range of certified organic products grown without harmful chemicals.',
        icon:<SiThymeleaf />
    },
]
