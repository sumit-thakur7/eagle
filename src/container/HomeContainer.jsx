import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar'
import AboutSection from '@/components/HomeComponents/AboutSection'
import CoursesSection from '@/components/HomeComponents/CoursesSection'
import FlightCTA from '@/components/HomeComponents/FlightCTA'
import GallerySection from '@/components/HomeComponents/GallerySection'
import HeroSection from '@/components/HomeComponents/HeroSection'
import React from 'react'

export default function HomeContainer (){
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <CoursesSection/>
    <GallerySection/>
    <FlightCTA/>
    <Footer/>
    </>
    
  )
}
