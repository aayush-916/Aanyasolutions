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
    <title>Our Services | Back Office, Inventory Management & Data Entry - Aanya Solutions</title>
    <meta
      name="description"
      content="Explore our professional services including back office work, inventory management, data entry, and report creation. Aanya Solutions delivers cost-effective support from India to businesses in the USA."
    />
    <meta
      name="keywords"
      content="back office services, inventory management company in India, data entry outsourcing, report creation services, low cost back office support, Aanya Solutions"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.aanyasolutions.com/services" />
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