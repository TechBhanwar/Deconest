import React from 'react'
import '../components/Style.css'
import Navbar from '../components/Navbar'

import SliderComponent from '../components/SliderComponent'
import Category from '../components/Category'
import Sliderproduct from '../components/Sliderproduct'
import Newarrival from '../components/Newarrival'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
     <SliderComponent  />
     <Category />
     <Sliderproduct />
     <Newarrival />
     <Footer />
    </div>
  )
}

export default Home
