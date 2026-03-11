import React from 'react'
import { Link } from 'react-router-dom'
import calculator from './../assets/calculator.jpg'
import bmi from './../assets/bmi.jpg'
import bmr from './../assets/bmr.jpg'
import car from './../assets/car.jpg'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-12'>
      {/* Header */}
      <div className='flex flex-col items-center mb-10'>
        <img src={calculator} alt='calculator' className='w-24 mb-4' />
        <h1 className='text-4xl font-bold text-gray-800'>เครื่องมือคำนวณออนไลน์</h1>
        <p className='text-gray-500 mt-2 text-lg'>เลือกการคำนวณคุณต้องการจากรายการด้านล่าง</p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl'>
        {/* BMI Card */}
        <Link to='/bmi' className='bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
          <img src={bmi} alt='bmi' className='w-36 h-36 object-contain mb-5' />
          <h2 className='text-xl font-bold text-gray-800 mb-2'>BMI (ดัชนีมวลกาย)</h2>
          <p className='text-gray-500 text-sm text-center'>คำนวณว่าน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่</p>
        </Link>

        {/* BMR Card */}
        <Link to='/bmr' className='bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
          <img src={bmr} alt='bmr' className='w-36 h-36 object-contain mb-5' />
          <h2 className='text-xl font-bold text-gray-800 mb-2'>BMR (อัตราการเผาผลาญ)</h2>
          <p className='text-gray-500 text-sm text-center'>คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการในแต่ละวัน</p>
        </Link>

        {/* Car Card */}
        <Link to='/car' className='bg-white rounded-2xl shadow-md p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 cursor-pointer'>
          <img src={car} alt='car' className='w-36 h-36 object-contain mb-5' />
          <h2 className='text-xl font-bold text-gray-800 mb-2'>การผ่อนชำระรถยนต์</h2>
          <p className='text-gray-500 text-sm text-center'>คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์</p>
        </Link>
      </div>
    </div>
  )
}
