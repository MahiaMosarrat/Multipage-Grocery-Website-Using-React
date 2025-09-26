import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-green-700 transition-all duration-300 cursor-pointer'>
      {props.content}
    </button>
  )
}

export default Button
