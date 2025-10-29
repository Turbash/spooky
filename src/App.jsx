import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import { Pumpkin } from './components/Pumpkin.jsx'
import { Canvas } from '@react-three/fiber'
import {Center, OrbitControls} from '@react-three/drei'
import About from './sections/About.jsx'

const App = () => {
  return (
    <>
      <figure className='absolute top-[11vh] z-20' style={{ width: '100vw', height: '100vh' }}>
        <Canvas shadows camera={{ position: [10, 20, 0], fov: 30 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <Center>
            <Pumpkin />
          </Center>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </figure>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App