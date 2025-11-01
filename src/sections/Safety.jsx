import React from 'react'
import bgImg from '../assets/halloween-bg-extended.jpg'

const Safety = () => {
  return (
    <div className='relative' id='safety'>
      <img src={bgImg} alt="" className='' />    
      <div className='absolute bottom-1/3 right-[5%] max-w-[40%] md:max-w-xs lg:max-w-md 2xl:max-w-3xl text-[0.8rem] sm:text-xs md:text-2xl 2xl:text-4xl leading-4 sm:leading-5 md:leading-10 2xl:leading-18 bg-[#00000070] px-4 py-3 md:px-8 md:py-6 rounded-4xl'>
        <h2 className='text-orange font-heading text-xl md:text-3xl 2xl:text-5xl mb-2 md:mb-4'>Halloween Safety</h2>
        <p>Stay safe with reflective costumes, adult supervision, well-lit routes, and checking candy before eating!</p>
      </div>    
    </div>
  )
}

export default Safety
