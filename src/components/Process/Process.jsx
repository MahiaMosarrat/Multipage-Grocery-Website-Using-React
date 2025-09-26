import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { VscSourceControl } from "react-icons/vsc";
import { LiaIndustrySolid } from "react-icons/lia";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";

const Process = () => {
    const renderSteps=steps.map(item=>{
        return(
            <div className={`flex-1 basis-[300px] ${item.id % 2===0 ? 'md:-mt-100':''}`}>
                <span className='flex justify-center items-center rounded-full mx-auto w-12 h-12 text-white text-8xl bg-zinc-800 outline-[3px] outline-dotted outline-zinc-800 outline-offset-3'>{item.number}</span>
                <div className='flex items-center gap-x-5 mt-10'>                   
                        <span className='flex justify-center items-center rounded-full bg-gradient-to-b from-green-500 to-green-700 text-white text-3xl h-12 w-12 '>{item.icon}</span>                   
                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-600 mt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
            
        )
    })
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 py-25'>
        <div className='w-fit mr-auto'>
            <Heading highlight='Our' heading='Process'/>
        </div>
        <div className='flex flex-wrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50'>
            {renderSteps}
        </div>

      </div>
    </section>
  )
}

export default Process

const steps=[
    {
        id:1,
        number:<TbCircleNumber1Filled />,
        title:'Sourcing',
        para:'We source quality products from trusted and ethical suppliers.',
        icon:<VscSourceControl />
    },
    {
        id:2,
        number:<TbCircleNumber2Filled />,
        title:'Manufacturing',
        para:'We source quality products from trusted and ethical suppliers.',
        icon:<LiaIndustrySolid />
    },
    {
        id:3,
        number:<TbCircleNumber3Filled />,
        title:'Quality Control',
        para:'Prepared with care using hygienic processes and fresh, high-quality ingredients.',
        icon:<RiVerifiedBadgeFill />
    },
    {
        id:4,
        number:<TbCircleNumber4Filled />,
        title:'Logistics',
        para:'Fast, safe, and reliable delivery right to your doorstep.',
        icon:<BsTruck />
    }
]
