import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-400 h-[100%] w-[100vw] bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-70 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
   <div>
    <div className=' flex md:justify-start justify-center '>
       <img className='h-20 w-20' src="./image/1000076644.png" alt="" />
    </div>
 
  <h1 className='text-white ml-3  font-semibold'>Naiteek</h1><p class="mt-2 text-sm text-gray-500 ml-3">I'm Naiteek - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!</p>
</div>


      
    </div>
    <div class="flex-grow flex flex-wrap md:pl-50 -mb-10 md:mt-0 mt-10 md:text-center text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">MANU</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-400 hover:text-white" href='#home'>Home</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='#about'>About</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='#projects'>projects</a>
          </li>
          <li>
            <a class="text-gray-400 hover:text-white" href='#services'>All services</a>
          </li>
                <li>
            <a class="text-gray-400 hover:text-white" href='#contact'>Contact</a>
          </li>
        </nav>
      </div>
           <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">chake</h2>
        <nav class="list-none mb-10 flex justify-center">
          <li>
            <a
        href="https://github.com/Naiteekkushwah"
        target="_blank"
        rel="noopener noreferrer">
<img className=' h-10 w-10 ' src="./image/github.png" alt="" />
      </a> 
          </li>
       
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-800 bg-opacity-75 relative">
      <div className=" bg-amber-50 py-2 mt-1 px-3 mx-10 top-0 absolute right-0 rounded-full">
          <a href="#home" className="back-to-top" aria-label="Back to Home">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#333"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
</a>

      </div>
      
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-400 text-sm text-center sm:text-left">© 2025 Naiteek —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-500 ml-1" target="_blank">@knyttneve</a>
    </p>
     
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer