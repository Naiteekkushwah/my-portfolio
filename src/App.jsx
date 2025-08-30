import React from 'react'
import Home from './pages/Home';
import Aboute from './pages/Aboute';
import Projects from './pages/Projects';
import Allservices from './pages/Allservices';
import Navbar from './pages/Navbar';
import Skilles from './pages/Skilles';
import Footer from './pages/Footer';
import Hellow from './pages/Hellow';
import { useEffect } from 'react'
import Lenis from 'lenis'


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.5, // scroll smoothness
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

 
  return (
    <div id="main" className=' overflow-hidden'>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><Aboute /></div>
      <div id="skills"><Skilles /></div>
      <div id="services"><Allservices /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Hellow /></div>
      <div id="footer"><Footer /></div>
    </div>
  
 
  );
}


export default App