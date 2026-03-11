import React from 'react'
import car from './../assets/car.jpg'
import { Link } from 'react-router-dom'
import Footer from './../components/Footer'

export default function Car() {
  return (
    <>
      <div className='w-2/3 mx-auto mt-10 mb-10 flex flex-col items-center shadow-lg rounded-lg p-10 bg-white'>
        {/* แสดงส่วนหัว */}
        <h1 className='text-2xl font-bold'>Car Installment Calculator</h1>
        <h3 className='text-gray-500'>คำนวณ Car Installment</h3>
        <img src={car} alt='car' className='w-24 mt-5' />

        {/* แสดงส่วนของการป้อน */}
        <div className='w-full mt-5'>
          <h3 className='mb-1'>ชื่อผู้คำนวณ</h3>
          <input
            type='text'
            placeholder=''
            className='w-full border border-gray-400 rounded p-2 mb-4'
          />

          <h3 className='mb-1'>ราคารถ (บาท)</h3>
          <input
            type='number'
            placeholder=''
            className='w-full border border-gray-400 rounded p-2 mb-4'
          />

          <h3 className='mb-1'>ดอกเบี้ยต่อปี (%)</h3>
          <input
            type='number'
            placeholder=''
            className='w-full border border-gray-400 rounded p-2 mb-4'
          />

          {/* เงินดาวน์ */}
          <h3 className='mb-2'>เงินดาวน์ (%)</h3>
          <div className='flex gap-4 flex-wrap mb-4'>
            {[15, 20, 25, 30, 35].map((val) => (
              <label key={val} className='flex items-center gap-1 cursor-pointer'>
                <input
                  type='radio'
                  name='downpayment'
                  value={val}
                  defaultChecked={val === 15}
                  className='accent-blue-600'
                />
                <span>{val}%</span>
              </label>
            ))}
          </div>

          {/* จำนวนเดือน */}
          <h3 className='mb-1'>จำนวนเดือนที่ผ่อน</h3>
          <select className='w-full border border-gray-400 rounded p-2 mb-2'>
            {[24, 36, 48, 60, 72, 84].map((m) => (
              <option key={m} value={m}>{m} เดือน</option>
            ))}
          </select>
        </div>

        {/* แสดงส่วนของปุ่มการทำงาน */}
        <div className='w-full flex gap-3 mt-4'>
          <button className='flex-1 bg-blue-600 p-3 rounded cursor-pointer hover:bg-blue-800 text-white font-bold'>
            คำนวณ
          </button>
          <button className='flex-1 bg-gray-300 p-3 rounded cursor-pointer hover:bg-gray-500 text-black font-bold'>
            ล้างข้อมูล
          </button>
        </div>

        {/* แสดงส่วนของการแสดงผลการคำนวณ */}
        <div className='flex gap-2 mt-5 items-center'>
          <h3 className='font-semibold'>ผ่อนชำระต่อเดือน:</h3>
          <h3 className='text-xl font-bold'>0.00 บาท</h3>
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
