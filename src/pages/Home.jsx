import React from 'react'
import '../components/Style.css'
import Navbar from '../components/Navbar'

import SliderComponent from '../components/SliderComponent'
import Category from '../components/Category'
import Sliderproduct from '../components/Sliderproduct'
import Testimonials from '../components/Testimonials'
import News from '../components/News'

const Home = () => {
  return (
    <div>
      <Navbar />
     <SliderComponent  />
     <Category />
   <Sliderproduct />
   <Testimonials />
   <News />
    </div>
  )
}

export default Home
