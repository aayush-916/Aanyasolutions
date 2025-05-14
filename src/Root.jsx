import './App.css'
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Services from './components/Services'
import Tools from './components/Tools'
import Whatsapp from './components/Whatsapp'
import { Helmet } from "react-helmet";
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import BlogThree from './components/BlogThree'

function App() {
  return (
    <>
    <Helmet>
        
    </Helmet>

      <Nav/>
      <Whatsapp/>
      <Home/>
      <Services/>
      <Tools/>
      <WhyChooseUs/>
      <Client/>
      <FAQ/>
      <BlogThree/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
