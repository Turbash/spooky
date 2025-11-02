import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const CTA = () => {
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef(null)
  const modalRef = useRef(null)
  const overlayRef = useRef(null)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setShowVideo(true)
  }

  const handleClose = () => {
    gsap.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setShowVideo(false)
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }
    })
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    })
  }

  useEffect(() => {
    if (showVideo) {
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
      gsap.fromTo(modalRef.current,
        { scale: 0.5, opacity: 0, rotationZ: -10 },
        { 
          scale: 1, 
          opacity: 1, 
          rotationZ: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          onComplete: () => {
            if (videoRef.current) {
              videoRef.current.play().catch(err => {
                console.log("Video autoplay prevented:", err)
              })
            }
          }
        }
      )

      gsap.to(modalRef.current, {
        x: "random(-5, 5)",
        y: "random(-5, 5)",
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "none"
      })
    }
  }, [showVideo])

  return (
    <>
      <div className='container min-h-[650px] flex justify-center items-center'>
        <h2 className='font-heading text-2xl lg:text-4xl xl:text-6xl text-center leading-18'>
          Don't Escape Yet...<br/>
          <button 
            onClick={handleSubscribe}
            className='text-orange hover:text-red-600 transition-colors duration-300 cursor-pointer underline decoration-wavy hover:scale-110 inline-block transform hover:rotate-2'
          >
            Subscribe
          </button> for more haunted builds 👻
        </h2>
      </div>

      {showVideo && (
        <div 
          ref={overlayRef}
          className='fixed inset-0 z-10000 flex items-center justify-center bg-black/95 backdrop-blur-sm'
          style={{ opacity: 0 }}
        >
          <div className='absolute inset-0 pointer-events-none opacity-10'>
            <div className='absolute inset-0 bg-[repeating-linear-gradient(0deg,#000_0px,#000_2px,transparent_2px,transparent_4px)]'></div>
          </div>

          <div 
            ref={modalRef}
            className='relative w-[90vw] max-w-4xl bg-linear-to-br from-red-950 via-black to-red-950 rounded-2xl border-4 border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.5)] overflow-hidden'
            style={{ opacity: 0, transform: 'scale(0.5)' }}
          >
            <div className='absolute inset-0 border-2 border-red-500 animate-pulse pointer-events-none'></div>
            
            <button
              onClick={handleClose}
              className='absolute top-4 right-4 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 hover:scale-110 hover:rotate-90 shadow-lg hover:shadow-red-600/50 border-2 border-red-800'
              aria-label="Close video"
            >
              ✕
            </button>

            <div className='bg-red-600 text-white text-center py-2 px-4 font-bold text-sm md:text-base flex items-center justify-center gap-2'>
              <span className='animate-pulse text-xl'>⚠️</span>
              <span>JUMPSCARE WARNING</span>
              <span className='animate-pulse text-xl'>⚠️</span>
            </div>

            <div className='relative aspect-video bg-black'>
              <video
                ref={videoRef}
                className='w-full h-full object-contain'
                playsInline
                onEnded={handleClose}
              >
                <source src="/vlipsy-pumpkin-jump-scare-rrS3hPdc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className='absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.8)_100%)]'></div>
            </div>

            <div className='bg-linear-to-t from-black to-transparent p-4 text-center'>
              <p className='text-red-500 font-bold text-sm md:text-base animate-pulse'>
                🎃 You've been spooked! 👻
              </p>
            </div>
          </div>

          <div className='absolute top-10 left-10 text-4xl animate-bounce opacity-50'>👻</div>
          <div className='absolute top-20 right-20 text-4xl animate-bounce opacity-50' style={{ animationDelay: '0.3s' }}>👻</div>
          <div className='absolute bottom-10 left-20 text-4xl animate-bounce opacity-50' style={{ animationDelay: '0.6s' }}>👻</div>
          <div className='absolute bottom-20 right-10 text-4xl animate-bounce opacity-50' style={{ animationDelay: '0.9s' }}>👻</div>
        </div>
      )}
    </>
  )
}

export default CTA