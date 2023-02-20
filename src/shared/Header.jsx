import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate();

    return (
        <div className='border-solid border-slate-200 border-b-2'>
            <header className='flex justify-between py-3 px-10 items-center'>
                <h1 className='font-semibold text-3xl'>Online Store</h1>
                <div className='tabs'>
                    <NavLink to='/' className='btn mx-3'>Home</NavLink>
                    <NavLink to='products' className='btn mx-3'>Product</NavLink>
                    <NavLink to='pages' className='btn mx-3'>Pages</NavLink>
                    <NavLink to='blog' className='btn mx-3'>Blogs</NavLink>
                </div>
                <div className='action-icons'>
                    <button className='mx-2'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"></path></svg></button>
                    <button className='mx-2'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg></button>
                    <button onClick={() => navigate("../cart")} className='mx-2 relative'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"></path></svg>
                        <span class="bg-primary text-[12px] text-center absolute bottom-[-10px] right-[-10px] h-[20px] leading-[20px] rounded-[20px] px-[6px] transition-all group-hover:text-white">4</span>
                    </button>
                    <button className='mx-2'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"></path></svg></button>
                </div>
            </header>
        </div>
    )
}
