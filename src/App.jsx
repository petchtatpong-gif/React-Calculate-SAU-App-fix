import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Bmi from './views/Bmi'
import Bmr from './views/Bmr'
import Car from './views/Car'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bmi' element={<Bmi />} />
          <Route path='/bmr' element={<Bmr />} />
          <Route path='/car' element={<Car />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
