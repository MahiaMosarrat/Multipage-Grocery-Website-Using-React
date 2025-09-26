import React from 'react'
import Button from '../Button/Button'
import FreshFrusit from '../../assets/fresh-fruit.png'

const Discount = () => {
  return (
    <section className='bg-no-repeat bg-right bg-contain' style={{backgroundImage:`url(${FreshFrusit})`}}>
      <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col  max-w-[1400px] mx-auto px-10 py-10'>
        <span className='md:text-9xl text-6xl text-green-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>
        <div className='max-w-[700px]'>
            <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order Special!</h3>
            <p className='text-zinc-600 my-6'>Enjoy an exclusive discount on your very first purchase.
Shop the best deals, discover must-have essentials, and experience fast, reliable delivery — all with quality guaranteed.</p>
            <span  className='md:text-5xl text-4xl text-emerald-500 font-bold'>Start saving today!</span><br /><br />
            <Button content='Get a Discount'/>
        </div>
      </div>

    </section>
  )
}

export default Discount
