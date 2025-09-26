import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/fruitBg.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggis" bgImage={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits
