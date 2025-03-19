import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const front = () => {
const diRef = useRef(null);
const imgRef = useRef(null);
  useGSAP(() => {
    const diElements = diRef.current.querySelectorAll('h1, h2,p');
    gsap.from(diElements, {
      x: -300,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay:1,
      ease: 'power3.out'
    });
  }, []);


  useGSAP(() => {
    const imgElements = imgRef.current.querySelectorAll('.sec1 img');
    gsap.from(imgElements, {
      x: 300,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      delay:1,
      ease: 'power3.out'
    });
  }, []);

  return (
 
    <>
    <div ref={diRef} className='nme bg-transparent h-full w-full '>
     

        <h1  className='text-6xl font-bold  '>Hii, I'm Ujjwal 👋🏻 </h1>
        <h2 className='text-2xl font-bold'>Passionate Developer | Web Enthusiast | Problem Solver</h2>
        <p className='text-1xl '>I'm a full-stack web developer skilled in C++, JavaScript, React, and the MERN stack. Passionate about building responsive, high-performance web apps with modern technologies. Always exploring, learning, and pushing boundaries in development. Let's create something amazing! 🚀</p>

        <div ref={imgRef} className='sec1 flex items-center justify-between h-[45vh] w-full flex-wrap' >
      <img className='tran h-20 relative' src="/html.png" alt="" />
      <img className='tran h-20 relative' src="/css.png" alt="" />
      <img className='tran h-20 relative' src="/js.png" alt="" />
      <img className='tran h-20 relative' src="nodejs.png" alt="" />
      <img className='tran h-20 relative' src="mongodb.png" alt="" />
      <img className='tran h-20 relative' src="react.png" alt="" />

    </div>
    </div>

   


    </>
  )
}

export default front