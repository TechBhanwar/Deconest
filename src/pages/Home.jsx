import React from 'react'
import '../components/Style.css'
import Navbar from '../components/Navbar'

import SliderComponent from '../components/SliderComponent'
import Category from '../components/Category'

const Home = () => {
  return (
    <div>
      <Navbar />
     <SliderComponent  />
     <Category />
    </div>
  )
}

export default Home
