import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PopularProduct = () => {

    const [products, setProducts] = useState(null);
    const navigate = useNavigate();

    const fetchProducts = () => {
        fetch("http://localhost:3000/products").then((response) => {
            response.json().then((result) => {
                setProducts(result)
            })
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className=''>
            <div className='flex justify-between items-center py-10'>
                <h2 className='text-xl font-semibold'>Popular Products</h2>
                <div className='flex'>
                    <button className='btn mx-2'>All Products</button>
                    <span className=' mx-2'>|</span>
                    <button className='btn mx-2'>Accessory</button>
                    <span className=' mx-2'>|</span>
                    <button className='btn mx-2'>Decoration</button>
                    <span className=' mx-2'>|</span>
                    <button className='btn mx-2'>Furniture</button>
                </div>
            </div>

            <div className='flex flex-wrap justify-between'>
                {products && products.map((data) => {
                    return (
                        <div className='product-card w-1/5 flex-col text-center mr-3 mb-5'>
                            <div className='product-img relative group after:bg-[rgba(0,0,0,.1)] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:opacity-0 after:transition-all after:pointer-events-none hover:after:opacity-100'>
                                <img src={data.image} alt='...' width='100%'></img>
                                <div class="flex justify-center absolute w-full top-1/2 left-auto transform -translate-y-1/2 z-[1]">
                                    <button type="button" onClick={() => navigate("../addtocart", {state: { id: data.id }})} class="bg-white rounded-full flex justify-center items-center text-[21px] w-[45px] h-[45px] leading-[48px] hover:text-primary transition-all opacity-0 invisible ease-in-out transform translate-y-20 duration-[.5s] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible mr-[15px] group-hover:delay-[0s]">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"></path></svg>
                                    </button>
                                    <div class="">
                                        <button type="button" class="bg-white rounded-full flex justify-center items-center text-[21px] w-[45px] h-[45px] leading-[48px] hover:text-primary transition-all opacity-0 invisible ease-in-out transform translate-y-20 duration-[.5s] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible mr-[15px] group-hover:delay-[.15s]">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"></path></svg>
                                        </button>
                                    </div>
                                    <button type="button" class="bg-white rounded-full flex justify-center items-center text-[21px] w-[45px] h-[45px] leading-[48px] hover:text-primary transition-all opacity-0 invisible ease-in-out transform translate-y-20 duration-[.5s] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible group-hover:delay-[.3s]">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <h3 className='mt-3 mb-4 font-medium text-lg'>{data.productName}</h3>
                            <p className='text-base text-gray-400'>{data.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
