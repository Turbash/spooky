import React from 'react'
import bgImg from '../assets/halloween-bg-extended.jpg'

const About = () => {
  return (
    <div className='relative' id='about'>
        <img src={bgImg} alt="" />    
        <div className='absolute bottom-1/3 right-1/10 max-w-[40%] md:max-w-xs lg:max-w-md 2xl:max-w-3xl text-[0.8rem] sm:text-xs md:text-2xl 2xl:text-4xl leading-4 sm:leading-5 md:leading-10 2xl:leading-18 bg-[#00000070] px-4 py-3 md:px-8 md:py-6 rounded-4xl'>
            This project shows how to create a 3D model using React + GSAP + Three.js.    
        </div>    
    </div>
  )
}

export default About