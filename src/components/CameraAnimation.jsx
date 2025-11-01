import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CameraAnimation = () => {
    const { camera, controls } = useThree();
    const initialPosition = useRef(null);
    const initialTarget = useRef(null);
    const openPosition = useRef(null);
    const openTarget = useRef(null);
    const triggers = useRef([]);

    useEffect(() => {
        if (!camera) return;

        if (!initialPosition.current) initialPosition.current = camera.position.clone();
        if (controls && !initialTarget.current) initialTarget.current = controls.target.clone();

        const ctrl = controls;

        const entrance = gsap.to(camera.position, {
            x: 0,
            y: 1.2,
            z: 5,
            duration: 4,
            ease: "power2.out",
            onUpdate: () => {
                if (ctrl) ctrl.update();
            },
            onComplete: () => {
                try {
                    openPosition.current = camera.position.clone();
                    if (ctrl) openTarget.current = ctrl.target.clone();
                } catch (e) {}
            },
        });

        triggers.current.push(
            ScrollTrigger.create({
                trigger: '#about',
                start: 'top 80%',
                end: '60% 40%',
                scrub: 1,
                onEnter: () => {
                    gsap.to(camera.position, {
                        x: -3,
                        y: 0.5,
                        z: 4.2,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                    if (ctrl) {
                        gsap.to(ctrl.target, {
                            x: 0,
                            y: 0.2,
                            z: 0,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl.update(),
                        });
                    }
                },
                onLeaveBack: () => {
                    const op = openPosition.current || initialPosition.current;
                    if (op) {
                        gsap.to(camera.position, {
                            x: op.x,
                            y: op.y,
                            z: op.z,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl?.update?.(),
                        });
                    }
                    const ot = openTarget.current || initialTarget.current;
                    if (ctrl && ot) {
                        gsap.to(ctrl.target, {
                            x: ot.x,
                            y: ot.y,
                            z: ot.z,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl.update(),
                        });
                    }
                },
            })
        );

        triggers.current.push(
            ScrollTrigger.create({
                trigger: '#history',
                start: 'top 80%',
                end: '60% 40%',
                scrub: 1,
                onEnter: () => {
                    gsap.to(camera.position, {
                        x: 3,
                        y: 0.3,
                        z: 4.5,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                    if (ctrl) {
                        gsap.to(ctrl.target, {
                            x: 0,
                            y: 0.15,
                            z: 0,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl.update(),
                        });
                    }
                },
                onLeaveBack: () => {
                    gsap.to(camera.position, {
                        x: -3,
                        y: 0.5,
                        z: 4.2,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                },
            })
        );

        triggers.current.push(
            ScrollTrigger.create({
                trigger: '#traditions',
                start: 'top 80%',
                end: '60% 40%',
                scrub: 1,
                onEnter: () => {
                    gsap.to(camera.position, {
                        x: -3.5,
                        y: 0.1,
                        z: 4.8,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                    if (ctrl) {
                        gsap.to(ctrl.target, {
                            x: 0,
                            y: 0.1,
                            z: 0,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl.update(),
                        });
                    }
                },
                onLeaveBack: () => {
                    gsap.to(camera.position, {
                        x: 3,
                        y: 0.3,
                        z: 4.5,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                },
            })
        );

        triggers.current.push(
            ScrollTrigger.create({
                trigger: '#activities',
                start: 'top 80%',
                end: '60% 40%',
                scrub: 1,
                onEnter: () => {
                    gsap.to(camera.position, {
                        x: 3.5,
                        y: -0.1,
                        z: 5.1,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                    if (ctrl) {
                        gsap.to(ctrl.target, {
                            x: 0,
                            y: 0.05,
                            z: 0,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl.update(),
                        });
                    }
                },
                onLeaveBack: () => {
                    gsap.to(camera.position, {
                        x: -3.5,
                        y: 0.1,
                        z: 4.8,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                },
            })
        );

        triggers.current.push(
            ScrollTrigger.create({
                trigger: '#safety',
                start: 'top 80%',
                end: '60% 40%',
                scrub: 1,
                onEnter: () => {
                    gsap.to(camera.position, {
                        x: -4,
                        y: -0.3,
                        z: 5.4,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                    if (ctrl) {
                        gsap.to(ctrl.target, {
                            x: 0,
                            y: 0,
                            z: 0,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl.update(),
                        });
                    }
                },
                onLeaveBack: () => {
                    gsap.to(camera.position, {
                        x: 3.5,
                        y: -0.1,
                        z: 5.1,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                },
            })
        );

        triggers.current.push(
            ScrollTrigger.create({
                trigger: '#faq',
                start: 'top 80%',
                end: '60% 40%',
                scrub: 1,
                onEnter: () => {
                    gsap.to(camera.position, {
                        x: 4,
                        y: -0.5,
                        z: 5.7,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                    if (ctrl) {
                        gsap.to(ctrl.target, {
                            x: 0,
                            y: -0.05,
                            z: 0,
                            duration: 1,
                            ease: "power2.out",
                            onUpdate: () => ctrl.update(),
                        });
                    }
                },
                onLeaveBack: () => {
                    gsap.to(camera.position, {
                        x: -4,
                        y: -0.3,
                        z: 5.4,
                        duration: 1,
                        ease: "power2.out",
                        onUpdate: () => ctrl?.update?.(),
                    });
                },
            })
        );

        const handleStart = () => triggers.current.forEach(t => t.disable());
        const handleEnd = () => setTimeout(() => triggers.current.forEach(t => t.enable()), 600);

        if (ctrl) {
            ctrl.addEventListener("start", handleStart);
            ctrl.addEventListener("end", handleEnd);
        }

        return () => {
            entrance.kill();
            triggers.current.forEach(t => t.kill());
            if (ctrl) {
                ctrl.removeEventListener("start", handleStart);
                ctrl.removeEventListener("end", handleEnd);
            }
        };
    }, [camera, controls]);

    return null;
};

export default CameraAnimation;