import React from 'react'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Service1 from './Components/Service1/Service1'
import Service2 from './Components/Service2/Service2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service1/>
      <Service2/>
      <Footer/>
    </div>
  )
}

export default App
