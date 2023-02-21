import React from 'react'
import { PopularProduct } from './PopularProduct'

export const Home = () => {
  return (
    <div>
      <div className='bg-gray-100 p-20 flex items-center justify-between min-h-screen'>
        <div className='w-1/2'>
          <p className='text-amber-500'>CHAIR <br />COLLECTION <br />2023</p>
          <h2 className='font-semibold text-6xl mt-5 mb-3'>Welcome To Online Store</h2>
          <div className='bg-amber-500 w-28 h-1'></div>
          <p className='my-7'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
          <button className='bg-slate-900 text-white py-2 px-5'>Shop Now <i class="fal fa-long-arrow-right"></i></button>
        </div>
        <div className='w-1/2'>
          <img src='https://helendo.jamstacktemplates.dev/images/hero/home-boxed/1.png' className='ml-auto' alt='...'></img>
        </div>
      </div>

      <div className='text-center w-2/3 mx-auto py-10'>
        <h2 className='text-2xl text-semibold mb-5'>Online Store</h2>
        <p>When you start with a portrait and search for a pure form, a clear volume, through successive eliminations, you arrive inevitably at the egg. Likewise, starting with the egg and following the same process in reverse, one finishes with the portrait.</p>
      </div>
      <div className='popular-product px-20 py-10'>
        <PopularProduct />
      </div>
    </div>

  )
}
