import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgSeaFood from '../../assets/seafoodBg.jpg'

const SeaFoods = () => {
  return (
    <div>
       <CategoryPage title="Meat & SeaFood" bgImage={bgSeaFood} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeaFoods
