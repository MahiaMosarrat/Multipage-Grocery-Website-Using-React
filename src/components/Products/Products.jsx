import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Cards from '../Cards/Cards';
import ProductList from '../ProductList/ProductList';
import { Link } from 'react-router-dom';


const Products = () => {
    const categories=['All','Vegetables','Fruits','SeaFood','Dairy']
    const [activeTab,setActiveTab]=useState('All');

    let filterdItems=activeTab==='All' ? ProductList: ProductList.filter(item=>item.category===activeTab);

    const renderCards=filterdItems.slice(0,8).map(product=>{
        return(
            <Cards image={product.image} name={product.name} price={product.price}/>

        )
    })
  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10'>
        <Heading highlight='Our' heading='Products'/>

        {/* tabs */}
        <div className=' flex flex-wrap justify-center gap-3 mt-10'>
            {categories.map(category=>{
                return(
                    <button key={category} className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${activeTab=== category ?'bg-gradient-to-b from-green-400 to-green-500 text-white':'bg-zinc-200'}`} onClick={()=>{setActiveTab(category)}}>
                        {category}
                    </button>
                )
            })}
        </div>

        {/* Product Listing */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-9'>
            {renderCards}
        </div>
        <div className='mt-10 mb-10 mx-auto w-fit'>
       <Link to="/allproducts" className='bg-gradient-to-b from-green-400 to-green-500 text font-bold text-white rounded-full py-2 px-2'>View All</Link>
        </div>
      </div>

    </section>
  )
}

export default Products
