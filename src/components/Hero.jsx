import React from 'react'
import { assets } from '../assets/assets'

function Hero() {
  return (
    <>
      <section style={{background: `url(${assets.banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: 'calc(100vh - 96px)'}} >
        <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.5)' }} className='h-full'>
            <div className="container mx-auto py-2.5 h-full flex flex-col justify-center">
                <h4 className='font-extrabold text-3xl text-white'>Business expo 2025</h4>
                <h1 className='font-extrabold text-9xl mt-5 text-white'>Big Conference</h1>
                <h3 className=' text-9xl mt-5 text-white'>& Workshop</h3>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
