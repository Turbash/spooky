import React, { useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import { Pumpkin } from './components/Pumpkin.jsx'
import { Canvas } from '@react-three/fiber'
import {Center, OrbitControls} from '@react-three/drei'
import About from './sections/About.jsx'
import CTA from './sections/CTA.jsx'
import CameraAnimation from './components/CameraAnimation.jsx'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const ref=useRef(null);

  useGSAP(()=>{
    gsap.to(ref.current, {
      y: '55vw',
      x: '-24vw',
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        end: '60% 40%',
        scrub: 1,
      },
    })
  }, []);

  return (
    <>
      <figure ref={ref} className='absolute top-[11vh] z-20' style={{ width: '100vw', height: '100vh' }}>
        <Canvas shadows camera={{ position: [10, 20, 0], fov: 30 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <Center>
            <Pumpkin />
          </Center>
          <CameraAnimation />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </figure>
      <Navbar />
      <Hero />
      <About />
      <CTA />
    </>
  )
}

export default App