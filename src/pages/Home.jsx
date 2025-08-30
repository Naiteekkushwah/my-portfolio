import React from 'react'
import Navbar from './Navbar'
import { useGSAP } from "@gsap/react";
import  gsap from "gsap";


const Home = () => {


useGSAP(()=>{
  gsap.from('#left',{
    x:-100,
    duration:1,
    delay:4,
    opacity:0,
      toggleActions: 'play none none reverse',
          
  })
   gsap.from('#rigth',{
    x:200,
    duration:1.5,
    delay:5,
    opacity:0,
      toggleActions: 'play none none reverse',
          
  })
  gsap.from('#limage #About',{
    x:-200,
    duration:1.5,
    delay:7,
    opacity:0,
      toggleActions: 'play none none reverse',
          
  })
  
})



  return (
    <>    
    
    <div className='bg-indigo-900 h-[100%] w-[100vw] grid grid-cols-1 md:grid-cols-2 md:items-center-safe items-center pt-30 '>
      <div id='left' className='bg-indigo-900 h-[70vh] w-full flex items-center justify-center px-10'>
   <div className='h-70 w-full bg-indigo-900 pl-10  '>
<h2 className='text-2xl text-white font-semibold '>
  Hi, I`m NaiTeek kushwah,
</h2>
<p className='mt-2 mb-5 text-white text-[1.2rem] leading-tight  font-medium'>A Freelance Full-Stack web Developer from India. <br />
I desingn and develop fast,respinsive,and user-frindly websites that help businesses grow.From sleek animations to secure backend systems deliver complete solutions-on time every time. <a className='text-blue-600 font-sans mb-5' href='#projects'>projects</a>,</p>
<a className='text-indigo-50 hover:text-white bg-green-600 hover:bg-green-500 font-bold px-5 py-3 rounded-md text-none ' href="#contact">Let's work together </a>

   </div>
      </div>
<div id='rigth' className='bg-indigo-900 h-[50vh] md:h-[70vh] w-full '><img src="./image/971.png" alt="hay" /></div>


    </div>
    </>
  )
}

export default Home