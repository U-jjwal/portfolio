import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; 

const Header = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    const navElements = navRef.current.querySelectorAll('h3, h4');
    gsap.from(navElements, {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, []);

 
 
      
  return (
   
<div className='h-[20vh] flex justify-between items-center relative'>

<nav ref={navRef} className='hed flex items-center justify-between  top-0 left-0 w-full p-4 z-50'>
 <h3 className='text-3xl font-bold'>Portfolio</h3>
 <div className='flex items-center justify-between gap-15  z-10 '>
     <h4 className='hover:text-gray-400 transitio cursor-pointer text-1xl' ><a href="https://github.com/U-jjwal" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition">
            <FaGithub />
          </a></h4>
     <h4 className='hover:text-gray-400 transitio cursor-pointer text-1xl' > <a href="mailto:ujjwaltiwari242@gmail.com" className="text-2xl hover:text-gray-400 transition">
            <FaEnvelope />
          </a></h4>
     {/* <h4  className='hover:text-gray-400 transitio cursor-pointer text-1xl' >Skills</h4> */}
     <h4 className='hover:text-gray-400 transitio cursor-pointer text-1xl' >  <a href="https://www.linkedin.com/in/-ujjwaltiwari/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400 transition">
            <FaLinkedin />
          </a></h4>

 </div>
</nav>
</div>

  )
}

export default Header 