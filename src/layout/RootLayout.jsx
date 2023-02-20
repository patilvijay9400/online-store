import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'
import { Header } from '../shared/Header'

export const RootLayout = () => {
    return (
        <div className='layout'>
            <Header />    
            <main className=''>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
