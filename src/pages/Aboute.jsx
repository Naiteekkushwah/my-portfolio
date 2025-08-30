import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

const Aboute = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageRef = useRef(null);
   const textRef = useRef(null);
 
  useGSAP(() => {
     // Image animation (बाईं तरफ से)
     gsap.from(imageRef.current, {
       x: -200,
       opacity: 0,
       duration: 1.5,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: imageRef.current,
         start: 'top 130%',
         toggleActions: 'play none none reverse',
        
       },
     });
 
     // Text animation (दाईं तरफ से)
     gsap.from(textRef.current, {
       x: 200,
       opacity: 0,
       duration: 1.5,
       delay:1,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: textRef.current,
         start: 'top 100%',
         toggleActions: 'play none none reverse',
        
       },
     });
   }, []);
  return (
    <div>
      <section class="text-gray-400 h-[100%] w-[100vw] bg-indigo-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div ref={imageRef}  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className=" object-cover object-center rounded"  src="./image/ab.png" alt="hero" />
    </div>
    <div ref={textRef} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <h2 className='font-semibold text-4xl text-white mb-5 underline'>About me</h2>
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi, I’m Naiteek — I Turn Ideas into 
        <br className="hidden lg:inline-block" />Web Experiences
      </h2>
      <p className="mb-4 leading-relaxed">I'm Naiteek, a full-stack Web Developer with 1 year
         of hands-on experience in building dynamic and user-friendly web applications. I’ve worked 
         on a variety of projects including e-commerce sites, business platforms, task management tools,
          and Uber-style apps — blending both front-end and back-end technologies to deliver smooth, scalable solutions. 
          I enjoy creating clean interfaces, writing efficient code, and building products that solve real-world problems. 
          Friendly by nature and curious at heart,
         I’m always exploring new tools and ideas to grow as a developer.</p>
      <div className="flex justify-center">
       <a href="#contact"> <button className=" inline-flex text-gray-50 hover:text-white bg-green-600 hover:bg-green-500 font-semibold  border-0 py-1.5 px-6 focus:outline-none rounded-md text-lg">Hire me</button></a>
    
      <a
        href="https://github.com/Naiteekkushwah"
        target="_blank"
        rel="noopener noreferrer">
<img className='ml-2 h-10 w-10 ' src="./image/github.png" alt="" />
      </a> 
      </div>
    </div>
  </div>
</section>
    </div>

  )
}

export default Aboute