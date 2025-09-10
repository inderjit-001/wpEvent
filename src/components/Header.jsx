import React from 'react'
import { assets } from '../assets/assets'
import { BsTicketPerforatedFill } from "react-icons/bs";



function Header() {
  return (
    <header className=' min-h-[60px] bg-blue-900 py-5'>
        <div className='container mx-auto px-2.5'>
            <div className='flex justify-between items-center'>
                <img src={assets.logoWhite} alt="logo" />
                <nav className='flex gap-10'>
                    <a href="#" className='text-white font-semibold inline-block hover:text-blue-600'>Home</a>
                    <a href="#" className='text-white font-semibold inline-block hover:text-blue-600'>About us</a>
                    <a href="#" className='text-white font-semibold inline-block hover:text-blue-600'>Events</a>
                    <a href="#" className='text-white font-semibold inline-block hover:text-blue-600'>Teams</a>
                    <a href="#" className='text-white font-semibold inline-block hover:text-blue-600'>Home</a>
                </nav>
                <button className='flex items-center py-4 px-10 gap-3 text-blue-900 font-bold rounded-3xl  bg-white hover:text-white hover:bg-blue-600 cursor-pointer transition-all'> <BsTicketPerforatedFill className='text-2xl' /> Get Tickets</button>
                </div>
        </div>
    </header>
  )
}

export default Header
