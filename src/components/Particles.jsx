import { Stars } from '@react-three/drei'
import React from 'react'

const Particles = () => {
  return (
    <Stars
        radius={50}
        depth={20}
        count={600}
        factor={4}
        fade
        speed={1}
    />
  )
}

export default Particles