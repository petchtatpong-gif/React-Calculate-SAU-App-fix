import React from 'react'
import bmr from './../assets/bmr.jpg'
import { Link } from 'react-router-dom'

export default function Bmr() {
  return (
    <div className='w-2/3 mx-auto mt-20 flex flex-col items-center shadow-lg rounded-lg p-10 bg-white'>
        {/* แสดงส่วนหัว */}
        <h1 className='text-2xl font-bold'>BMR Calculator</h1>
        <h3 className='text-gray-500'>คำนวณ BMR</h3>
        <img src={bmr} alt='bmr' className='w-20 mt-5' />

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
            className='w-full border border-gray-400 rounded p-2 mb-3'
          />
          <h3>ป้อนอายุ (ปี)</h3>
          <input
            type='number'
            placeholder='เช่น 25'
            className='w-full border border-gray-400 rounded p-2 mb-3'
          />

          {/* เพศ */}
          <h3 className='mb-2'>เพศ:</h3>
          <div className='flex flex-col gap-1 mb-3'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='radio' name='gender' value='male' defaultChecked className='accent-blue-600' />
              <span>ชาย</span>
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input type='radio' name='gender' value='female' className='accent-blue-600' />
              <span>หญิง</span>
            </label>
          </div>
        </div>

        {/* แสดงส่วนของปุ่มการทำงาน */}
        <div className='w-full flex gap-3 mt-2'>
          <button className='flex-1 bg-blue-600 p-3 rounded cursor-pointer hover:bg-blue-800 text-white font-bold'>
            คำนวณ BMR
          </button>
          <button className='flex-1 bg-red-500 p-3 rounded cursor-pointer hover:bg-red-700 text-white font-bold'>
            รีเซ็ต
          </button>
        </div>

        {/* แสดงส่วนของการแสดงผลการคำนวณ */}
        <div className='flex gap-2 mt-5 items-center'>
          <h3>ค่า BMR ที่คำนวณได้:</h3>
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
  )
}
