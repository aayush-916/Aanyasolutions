import React from 'react'
import { useEffect } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Nav from './Nav'
import Services from './Services'
import './Services.css'
import Whatsapp from './Whatsapp'
import { Helmet } from "react-helmet";
function ServicesPage() {
  useEffect(() =>{
    window.scrollTo(0,0);
  })
  return (
    <>
    <Helmet>
        <title>Services - Aanya Solutions</title>
        <meta
          name="description"
          content="Discover premium services at Aanya Solutions – the best website design, app development, software solutions, and SEO services in India. Empowering your business with innovative digital solutions."
        />
      </Helmet>
        <Nav/>
        <Whatsapp/>
        <Services/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default ServicesPage