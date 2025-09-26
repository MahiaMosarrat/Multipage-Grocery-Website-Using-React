import React from 'react'

const Heading = (props) => {
  return (
    <div className='w-fit mx-auto'>
                <h2 className='md:text-5xl text-[2.5rem] font-bold'><span className='text-green-700'>{props.highlight}</span> {props.heading}</h2>
                <div className='w-30 h-1 bg-emerald-400 md:mt-4 mt-1 ml-auto'></div>
    </div>
  )
}

export default Heading
