import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Spline from "../commponet/Spline";

const Hellow = () => {

 gsap.registerPlugin(ScrollTrigger);
  const form = useRef(null);
   const erthe = useRef(null);
    const contect = useRef(null);
   const per = useRef(null);
 
  useGSAP(() => {
     // Image animation (बाईं तरफ से)
     gsap.from(form.current, {
       x:-200,
       opacity: 0,
       duration: 1.5,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: form.current,
         start: 'top 50%',
         toggleActions: 'play none none reverse',
        
       },
     });
       gsap.from(contect.current, {
       y:-20,
       opacity: 0,
       duration: 1.5,
       ease: 'power3.out',
       scrollTrigger: {
         trigger: contect.current,
         start: 'top 70%',
         toggleActions: 'play none none reverse',
        
       },
     });
       gsap.from(per.current, {
       y:-10,
       opacity: 0,
       duration: 1.5,
       ease: 'power3.out',
       scrollTrigger: {
         trigger:per.current,
         start: 'top 70%',
         toggleActions: 'play none none reverse',
        
       },
     });
   }, []);


  return (
    <div>
        <section class="text-gray-400 h-[100%] w-[100vw] bg-black body-font relative">
  <div class="container px-5 py-24 mx-auto flex justify-around sm:flex-nowrap flex-wrap">
    <div ref={erthe} class="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-start relative">
 <Spline/>
    </div>
    <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 ref={contect} class="text-white text-lg mb-1 font-medium title-font">Contact Us
</h2>
      <p ref={per} class="leading-relaxed mb-5">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
     <form ref={form} action="https://formspree.io/f/mnnzywrv" method="post">
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
        <input type="text"  required autoComplete='off' id="name" name="name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" required autoComplete='off' id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" required autoComplete='off' name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-indigo-700 border-0 py-2 border-b-3 hover:border-1 hover:border-indigo-700 border-indigo-500 w-full px-6 focus:outline-none rounded text-lg">Submint</button>
    </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hellow