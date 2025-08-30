import React,{useState} from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from 'react-scroll';
import MobileMenu from './MobileMenu';
const Navbar = () => {

useGSAP(function() {
  gsap.from("nav",{
    y:-70,
    opacity:0,
    duration:0.8,
    delay:1,
  })
   gsap.from("div #image",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:2,
  })
   gsap.from("div #rigths h4",{
    y:-20,
    opacity:0,
    duration:0.5,
    delay:2.5,
    stagger:0.5,
  })
 
})


  return (
   <div  className='bg-gray-600 text-amber-50'>
      <nav className='h-15 fixed w-[97vw] bg-indigo-900 transparent z-10 flex items-center justify-between pl-5 pr-5 ml-[1vw] mt-3 rounded-xl shadow-sm shadow-gray-50'>
   <div>
<div className=' rounded-full'>
  <img id='image' className='h-23 w-25' src="./image/1000076644.png" alt="" />
</div>



   </div>
   <div id='rigths' className=' hidden md:gap-5  md:flex md:opacity-100'>
    <h4><a className='font-semibold' href="#home">Home</a></h4>
    <h4><a className='font-semibold' href=""><Link to="about" smooth={true} duration={600}>About</Link></a></h4>
    <h4><a className='font-semibold' href="#services">All services</a></h4>
    <h4><a className='font-semibold' href="#projects">projects</a></h4>
    </div>
      <div className='md:hidden absolute'>
      <MobileMenu/>   
      </div>
  
      </nav>

    </div>
  )
}

export default Navbar