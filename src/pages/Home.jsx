import React from 'react'
import '../components/Style.css'
import Navbar from '../components/Navbar'

import SliderComponent from '../components/SliderComponent'
import Category from '../components/Category'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
      <Navbar />
     <SliderComponent  />
     <Category />
     <Product />
    </div>
  )
}

export default Home
