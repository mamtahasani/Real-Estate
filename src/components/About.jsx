import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
       
        <h1 className='text-2xl sm:text-4xl font:bold mb-2'>About
       <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
       </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Prperties, Dedicated to Your Vision</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>

            <img src={assets.brand_img} alt="" className="w-full sm:1/2 max-w-lg" />

            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                
                    <div className='grid grid-cols gap-6 md:gap-10 w-full 2xl:pr-28'>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>Ongoing Projects</p>
                        </div>
                        
                        <p className='my-10 max-w-lg '>
                            We are redefining the real estate experience. By blending deep market expertise with cutting-edge technology, we offer a smarter, more seamless way to buy and sell property. Our innovative platform provides real-time data, virtual tours, and a streamlined communication process, empowering you to make confident decisions with unparalleled speed and clarity. We're not just agents; we're your strategic partners in navigating the future of real estate.
                        </p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded '>Learn more</button>

                    </div>

            </div>
        </div>
    </div>
  )
}

export default About