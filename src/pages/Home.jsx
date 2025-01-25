import React from 'react'
import '../components/Style.css'
import Navbar from '../components/Navbar'

import SliderComponent from '../components/SliderComponent'
import Category from '../components/Category'
import Sliderproduct from '../components/Sliderproduct'

import Newarrival from '../components/Newarrival'
import Footer from '../components/Footer'

import Testimonials from '../components/Testimonials'
import News from '../components/News'
import Footernav from '../components/Footernav'


const Home = () => {
  return (
    <div>
      <Navbar />
     <SliderComponent  />
     <Category />

     <Sliderproduct />
     <Newarrival />
   <Testimonials />
   <News />
   <Footer />
   <Footernav />
    </div>
  )
}

export default Home
