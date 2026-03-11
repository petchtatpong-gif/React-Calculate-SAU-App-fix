import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Bmi from './views/Bmi'
import Bmr from './views/Bmr'
import Car from './views/Car'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bmi' element={<Bmi />} />
          <Route path='/bmr' element={<Bmr />} />
          <Route path='/car' element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
