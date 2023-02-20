import React from 'react'

export const Cart = () => {
  return (
    <div className='p-10'>
      <div class="cart border-b border-[#ededed]">
        <div class="relative">
          <table class="cart-table w-full text-sm text-left">
            <thead class="text-[18px] bg-[#f4f5f7]">
              <tr>
                <th scope="col" class="font-medium py-3">Product</th>
                <th scope="col" class="font-medium py-3">Price</th>
                <th scope="col" class="font-medium py-3">Quantity</th>
                <th scope="col" class="font-medium py-3">Total</th>
                <th scope="col" class="font-medium py-3">Item Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="py-4 product-name pr-[25px] flex items-center font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <a class="product-img" href="/products/animi-dolor-pariatur">
                    <img src="/images/products/animi-dolor-pariatur/74x74.jpg" alt="Animi Dolor Pariatur" />
                  </a>
                  <h2 class="product-name">
                    <a class="text-[14px] transition-all hover:text-primary" href="/products/animi-dolor-pariatur">Animi Dolor Pariatur</a>
                  </h2>
                </td>
                <td class="py-4">$10.00</td>
                <td class="py-4">
                  <div class="relative inline-flex mr-[15px]">
                    <div class="flex justify-center w-[120px]">
                      <button type="button" class="cursor-pointer text-center absolute dec top-1/2 -translate-y-1/2 left-[4px]">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M400 256H112"></path></svg>
                      </button>
                      <input class="qty-input outline-none text-center w-[100px] px-[15px] h-[46px] leading-[40px]" type="number" name="qtybutton" value="4" />
                      <button type="button" class="cursor-pointer text-center absolute inc top-1/2 -translate-y-1/2 right-[4px]">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="py-4">$40.00</td>
                <td class="py-4 text-right">
                  <button type="button" class="item-remove flex items-start text-[20px]">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144m224 0L144 368"></path></svg>
                  </button>
                </td>
              </tr></tbody>
          </table>
        </div>
        <div class="group-btn flex justify-between pt-[50px]">
          <a class="inline-flex items-center bg-black text-white h-[46px] sm:px-[42px] px-[12px] transition-all hover:bg-[#222222]" href="/products/left-sidebar">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-[5px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"></path></svg>
            Continue Shopping
          </a>
          <div class="btn-wrap">
            <button type="button" class="inline-flex items-center border border-black h-[46px] sm:px-[42px] px-[12px] transition-all hover:bg-[#222222] hover:text-white">Clear cart</button>
          </div>
        </div>
        <div class="cart-info pt-[50px]">
          <div class="grid grid-cols-12 md:gap-x-[30px] max-lm:gap-y-[30px]">
            <div class="md:col-span-6 col-span-12">
              <div class="coupon flex flex-col lg:max-w-[400px]">
                <h2 class="title text-[18px] mb-[30px]">Coupon Discount</h2>
                <p class="desc mb-[15px]">Enter your coupon code if you have one.</p>
                <input type="text" name="coupon" placeholder="Coupon code" class="border border-[#cccccc] outline-none p-[15px_15px_13px]" />
                <div class="btn-wrap inline-flex items-center pt-[30px]">
                  <button type="submit" class=" border border-black h-[46px] px-[42px] transition-all hover:bg-[#222222] hover:text-white">Apply coupon</button>
                </div>
              </div>
            </div>
            <div class="md:col-span-6 col-span-12">
              <div class="cart-subtotal lg:max-w-[400px] ml-auto">
                <div class="border border-[#bfbfbf] bg-[#f9f9f9] px-[30px]">
                  <ul class="content py-[30px]">
                    <li class="item flex justify-between border-b border-[#cdcdcd] pb-[16px] mb-[17px]">
                      <span class="font-bold">Subtotal:</span><span>$40.00</span>
                    </li><li class="item flex justify-between">
                      <span class="font-bold">Total:</span><span>$40.00</span>
                    </li>
                  </ul>
                </div>
                <div class="btn-wrap flex justify-center pt-[30px]">
                  <a class="bg-black text-white h-[46px] leading-[46px] w-full text-center px-[42px] transition-all hover:bg-[#222222]" href="/checkout">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
