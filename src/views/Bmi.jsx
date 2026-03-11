import React from 'react'
import bmi from './../assets/bmi.jpg'
import { Link } from 'react-router-dom'
import Footer from './../components/Footer'

export default function Bmi() {
  return (
    <>
      <div className='w-2/3 mx-auto mt-20 flex flex-col items-center shadow-lg rounded-lg p-10 bg-white'>
        {/* แสดงส่วนหัว */}
        <h1 className='text-2xl font-bold'>BMI Calculator</h1>
        <h3 className='text-gray-500'>คำนวณ BMI</h3>
        <img src={bmi} alt='bmi' className='w-20 mt-5' />

        {/* แสดงส่วนของการป้อน */}
        <div className='w-full mt-5'>
          <h3>ป้อนน้ำหนัก (กิโลกรัม)</h3>
          <input
            type='number'
            placeholder='เช่น 65'
            className='w-full border border-gray-400 rounded p-2 mb-3'
          />
          <h3>ป้อนส่วนสูง (เซนติเมตร)</h3>
          <input
            type='number'
            placeholder='เช่น 170'
            className='w-full border border-gray-400 rounded p-2'
          />
        </div>

        {/* แสดงส่วนของปุ่มการทำงาน */}
        <button className='w-full bg-blue-600 mt-5 p-3 rounded cursor-pointer hover:bg-blue-800 text-white font-bold'>
          <h3>คำนวณ BMI</h3>
        </button>
        <button className='w-full bg-gray-300 mt-3 p-3 rounded cursor-pointer hover:bg-gray-500 text-black font-bold'>
          <h3>รีเซ็ต</h3>
        </button>

        {/* แสดงส่วนของการแสดงผลการคำนวณ */}
        <div className='flex gap-2 mt-5 items-center'>
          <h3>ค่า BMI ที่คำนวณได้:</h3>
          <h3 className='text-2xl font-bold text-blue-600'>0.00</h3>
        </div>

        {/* แสดงลิงค์เพื่อกลับไปหน้าหลัก */}
        <Link
          to='/'
          className='w-full bg-gray-300 mt-3 p-3 rounded cursor-pointer hover:bg-gray-500 text-black font-bold text-center'
        >
          <h3>กลับหน้าหลัก</h3>
        </Link>
      </div>
      <Footer />
    </>
  )
}
