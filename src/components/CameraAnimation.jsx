import React, { use, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";

const CameraAnimation = () => {

    const {camera} = useThree();

    useEffect(() => {
        gsap.to(camera.position, {
            x: 0,
            y: 1.2,
            z: 5,
            duration: 4,
            ease: "power2.out",
        })
    }, [camera]);
    return null;
};

export default CameraAnimation;
