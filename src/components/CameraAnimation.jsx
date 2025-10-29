import React, { use, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

        gsap.to(camera.position, {
            x: -3,
            y: 0.5,
            z: 4.2,
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
                end: '60% 40%',
                scrub: 1,
            },
            immediateRender: false,
        })
    }, [camera]);

    
    return null;
};

export default CameraAnimation;
