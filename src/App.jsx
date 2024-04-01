import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Herosection from './Components/Herosection/Herosection'
import Header from './Components/Header/Header'
import Destination from './Components/Destination/Destination'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Error from './Components/Error/Error'


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Herosection/>}/>
      <Route path='/Destination' element={<Destination/>} />
      <Route path='/About' element={<About/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App