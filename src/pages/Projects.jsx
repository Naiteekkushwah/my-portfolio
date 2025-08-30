import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
const projects = () => {
   gsap.registerPlugin(ScrollTrigger);
    const projects1 = useRef(null);
     const projects2 = useRef(null);
   const h = useRef(null)
   const p = useRef(null)
useGSAP(() => {
       // Image animation (बाईं तरफ से)
        gsap.from(h.current, {
         y:-20,
         opacity: 0,
         duration: 1.5,
         scrollTrigger: {
           trigger:h.current,
           start: 'top 100%',
           toggleActions: 'play none none reverse',
          
         },
       });
          gsap.from(p.current, {
         y:-20,
         opacity: 0,
         duration: 2,
         scrollTrigger: {
           trigger:p.current,
           start: 'top 100%',
           toggleActions: 'play none none reverse',
          
         },
       });
       gsap.from(projects1.current, {
         y:200,
         opacity: 0,
         duration: 1.5,
         ease: 'power3.out',
         scrollTrigger: {
           trigger: projects1.current,
           start: 'top 100%',
           toggleActions: 'play none none reverse',
          
         },
       });
       gsap.from(projects2.current, {
         y:200,
         opacity: 0,
         duration: 1.5,
         ease: 'power3.out',
         scrollTrigger: {
           trigger:projects2.current,
           start: 'top 100%',
           toggleActions: 'play none none reverse',
          
         },
       });
   
       // Text animation (दाईं तरफ से)
     }, []);
  return (
    <div>
      <section class="text-gray-400 h-[100%] w-[100vw] bg-gray-900 body-font">
          <div className="text-center mb-12">
          <h2 ref={h} className="text-4xl text-white font-bold mb-4">projects</h2>
          <p ref={p} className="text-gray-400">complete web solution from forntend to Backend-fast,secure & scabale</p>
        </div>   
  <div className="container px-5 py-7 mx-auto">
    <div className="md:flex flex-wrap ">
      <div ref={projects1} className="md:w-[45%] md:mr-10 mb-10 px-4 bg-[#090c16] py-4 rounded">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./image/e-commers.png"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-white mt-1 mb-1 underline">E-Commerce Website</h2>
        <p className=' leading-5'>A dynamic online shopping platform where users can browse products, add items to their cart, and complete secure purchases. Features include product filtering, responsive design, and a user-friendly checkout process.</p>
      <a href="https://e-commers-project-ixbd.onrender.com"> <button class="mr-5 mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out animate-bounce">
  Live Demo 🚀
</button></a>
<a href="https://github.com/Naiteekkushwah/E-commers-project" class="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out group">
  <svg class="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12H4m0 0l4-4m-4 4l4 4m8-4h4m0 0l-4-4m4 4l-4 4" />
  </svg>
  View Code
</a>
      </div>
       <div ref={projects2} className="md:w-[45%] mb-10 px-4 bg-[#090c16] py-4 rounded">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="./image/project.png"/>
        </div>
        <h2 className="title-font text-2xl font-medium text-white mt-1 mb-1 underline">Blog Website</h2>
        <p className=' leading-5'>A content-sharing platform where users can write, edit, and publish blog posts. Includes category tagging, a comment section, and SEO-friendly architecture for better visibility.</p>
       <a href="https://ejs-blog-platform.onrender.com"> <button class="mr-5 mt-6 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out animate-bounce">
  Live Demo 🚀
</button></a>
<a href="https://github.com/Naiteekkushwah/ejs-blog-platform" class="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out group">
  <svg class="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12H4m0 0l4-4m-4 4l4 4m8-4h4m0 0l-4-4m4 4l-4 4" />
  </svg>
  View Code
</a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default projects