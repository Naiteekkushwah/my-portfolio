import React, { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


const Allservices = () => {
  gsap.registerPlugin(ScrollTrigger);
  const leftser = useRef(null);
   const rigthser = useRef(null);
   const secrigth = useRef(null);
   const secleft = useRef(null);
 const top = useRef()
 const tope = useRef()
  useGSAP(() => {
     // Image animation (बाईं तरफ से)
      gsap.from(tope.current, {
       y:-20,
       opacity: 0,
       duration: 1.5,
       scrollTrigger: {
         trigger: tope.current,
         start: 'top 100%',
         toggleActions: 'play none none reverse',
        
       },
     });
        gsap.from(top.current, {
       y:-20,
       opacity: 0,
       duration: 2,
       scrollTrigger: {
         trigger: top.current,
         start: 'top 100%',
         toggleActions: 'play none none reverse',
        
       },
     });
     gsap.from(leftser.current, {
       x: -200,
       opacity: 0,
       duration: 1.5,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: leftser.current,
         start: 'top 100%',
         toggleActions: 'play none none reverse',
        
       },
     });
     gsap.from(secleft.current, {
       x: -200,
       opacity: 0,
       duration: 1.5,
       ease: 'power3.out',
       scrollTrigger: {
         trigger:secleft.current,
         start: 'top 100%',
         toggleActions: 'play none none reverse',
        
       },
     });
 
     // Text animation (दाईं तरफ से)
     gsap.from( rigthser.current, {
       x: 200,
       opacity: 0,
       duration: 1.5,
       delay:1,
       ease: 'power3.out',
       scrollTrigger: {
         trigger:  rigthser.current,
         start: 'top 90%',
         toggleActions: 'play none none reverse',
        
       },
     });
       gsap.from( secrigth.current, {
       x: 200,
       opacity: 0,
       duration: 1.5,
       delay:1,
       ease: 'power3.out',
       scrollTrigger: {
         trigger:  secrigth.current,
         start: 'top 100%',
         toggleActions: 'play none none reverse',
        
       },
     });
   }, []);
  return (
    <div className='h-[100%] w-[100vw] bg-indigo-900'>
     <div className="text-center mb-12">
          <h2 ref={tope} className="text-4xl text-white font-bold mb-4">my services</h2>
          <p ref={top} className="text-gray-400">complete web solution from forntend to Backend-fast,secure & scabale</p>
        </div>   
  <section ref={leftser} class="text-gray-400 h-[100%] w-[100vw] bg-indigo-900 body-font">
  <div class="container mx-auto flex md:flex-row flex-col items-center">
    <div class="lg:max-w-[25%] lg:w-full md:w-100 w-50 md:mb-3 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src="./image/left.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-1 font-medium text-white">cstom website Devlopment
      </h1>
      <p class="mb-4 text-[#bdbdbd] leading-relaxed">I create fully customized websites tailored to your business goals and user needs.</p>
     
       <div id="textbox" className='mb-3 text-white underline'>
      <p>Rensponsive Design</p>
       <p>SEO-Friendly Code</p>
        <p>clean UI/UX</p>
         <p>Cross-Browser Compatible</p>
      </div>
     
      <div class="flex justify-center">
        <a href="#contact"> <button className=" inline-flex text-gray-50 hover:text-white bg-green-600 hover:bg-green-500 font-semibold  border-0 py-1.5 px-6 focus:outline-none rounded-md text-lg">Hire me</button></a>
      </div>
    </div>
  </div>
</section>
<section ref={rigthser} class="text-gray-400 h-[100%] w-[100vw] bg-indigo-900 body-font mt-10 mb-5">
  <div class="container mx-auto flex md:flex-row flex-col-reverse items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-end mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">frontend Development
      </h1>
      <p class="mb-3 leading-relaxed ">Beautiful, interactive,and fast user interfaces using HTML.CSS,Javascript & framework. </p>
             <div id="textbox" className='mb-4 text-white underline'>
      <p class="rev1">Smooth Animastion & Scrolling</p>
       <p class="rev1">Creactive Icon & Layouts</p>
        <p class="rev1">React/Vue/Taillwin CSS </p>
         <p class="rev1">Pixel Perfect Design</p>
         
      </div> 
      <div class="flex justify-center">
       
         <a href="#contact"> <button className=" inline-flex text-gray-50 hover:text-white bg-green-600 hover:bg-green-500 font-semibold  border-0 py-1.5 px-6 focus:outline-none rounded-md text-lg">Hire me</button></a>
      </div>
    </div>

    <div class="lg:max-w-[25%] lg:w-full md:w-100 mb-3 w-70">
      <img class="object-cover object-center rounded" alt="hero" src="./image/1000101922.jpg"/>
    </div>
  </div>
</section>
 <section ref={secleft}  class="text-gray-400 h-[100%] w-[100vw] bg-indigo-900 body-font">
  <div class="container mx-auto flex md:flex-row flex-col items-center">
    <div class="lg:max-w-[25%] lg:w-full md:w-100 w-50 md:mb-3 mb-10">
      <img class="object-cover object-center rounded" alt="hero" src="./image/rigth.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-1 font-medium text-white">Backend Development
      </h1>
      <p class="mb-4 text-[#bdbdbd] leading-relaxed">Secure and scalable server-side login,API,and database connections.</p>
     
         <div id="textbox" className=' text-white underline mb-3'>
      <p  class="re2">Node.js/express</p>
       <p  class="re2">API integration(REST,GraphQL)</p>
        <p  class="re2">Secure Login & Authentication</p>
         <p  class="re2">Database:MongoDB</p>
      </div>
     
      <div class="flex justify-center">
        <a href="#contact"> <button className=" inline-flex text-gray-50 hover:text-white bg-green-600 hover:bg-green-500 font-semibold  border-0 py-1.5 px-6 focus:outline-none rounded-md text-lg">Hire me</button></a>
      </div>
    </div>
  </div>
</section>
<section ref={secrigth} class="text-gray-400 h-[100%] w-[100vw] bg-indigo-900 body-font mt-10 mb-5">
  <div class="container mx-auto flex md:flex-row flex-col-reverse items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-end mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">Admin Panel & Dashbord
      </h1>
      <p class="mb-3 leading-relaxed ">Powerful admin panels to manage your website content,users,and performanc</p>
                <div id="textbox" className=' text-white underline mb-3'>
      <p class="rev2">User Managemant</p>
       <p class="rev2">Content Control</p>
        <p class="rev2">Real-time Analytics</p>
         <p class="rev2">Notification System</p>
         
      </div> 
      <div class="flex justify-center">
       
         <a href="#contact"> <button className=" inline-flex text-gray-50 hover:text-white bg-green-600 hover:bg-green-500 font-semibold  border-0 py-1.5 px-6 focus:outline-none rounded-md text-lg">Hire me</button></a>
      </div>
    </div>

    <div class="lg:max-w-[25%] lg:w-full md:w-100 mb-3 w-70">
      <img class="object-cover object-center rounded" alt="hero" src="./image/secleft.jpg"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Allservices