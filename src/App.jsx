import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import { Pumpkin } from "./components/Pumpkin.jsx";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import About from "./sections/About.jsx";
import CTA from "./sections/CTA.jsx";
import CameraAnimation from "./components/CameraAnimation.jsx";
import History from "./sections/History.jsx";
import Traditions from "./sections/Traditions.jsx";
import Activities from "./sections/Activities.jsx";
import Safety from "./sections/Safety.jsx";
import FAQ from "./sections/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  useGSAP(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      
      gsap.fromTo(
        ref.current,
        { y: "0vw", x: "0vw" },
        {
          y: "55vw",
          x: "-24vw",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "60% 40%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ref.current,
        { y: "55vw", x: "-24vw" },
        {
          y: "110vw",
          x: "24vw",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#history",
            start: "top 90%",
            end: "70% 30%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ref.current,
        { y: "110vw", x: "24vw" },
        {
          y: "175vw",
          x: "-24vw",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#traditions",
            start: "top 90%",
            end: "50% 40%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ref.current,
        { y: "175vw", x: "-24vw" },
        {
          y: "235vw",
          x: "24vw",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#activities",
            start: "top 90%",
            end: "50% 50%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ref.current,
        { y: "235vw", x: "24vw" },
        {
          y: "295vw",
          x: "-24vw",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#safety",
            start: "top 90%",
            end: "50% 40%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ref.current,
        { y: "295vw", x: "-24vw" },
        {
          y: "360vw",
          x: "24vw",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#faq",
            start: "top 60%",
            end: "50% 50%",
            scrub: 1,
          },
        }
      );
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />;
  }

  return (
    <>
      <figure
        ref={ref}
        className="absolute top-[11vh] z-20"
        style={{ width: "100vw", height: "100vh" }}
      >
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
      <History />
      <Traditions />
      <Activities />
      <Safety />
      <FAQ />
      <CTA />
      <Footer />
      <BackgroundMusic />
    </>
  );
};

export default App;
