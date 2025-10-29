import React from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "../components/Particles.jsx";

const Hero = () => {
  return (
    <div className="relative h-screen flex justify-center">
      <h1 className="font-heading text-[11vw] mt-36">
        Spooky 3D <span className="text-orange">Pumpkin</span>
      </h1>
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1.5} />
          <Particles />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
