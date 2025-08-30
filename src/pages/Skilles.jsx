import React from "react";

const skills = [
  { name: "HTML", icon: "./image/html.png" },
  { name: "CSS", icon: "./image/css-3.png" },
  { name: "JavaScript", icon: "./image/js.png" },
  { name: "React", icon: "./image/atom.png" },
  { name: "Tailwind CSS", icon: "./image/telwind.png" },
  { name: "GSAP", icon: "./image/gsap..png" },
  { name: "Git", icon: "./image/git.png" },
  { name: "GitHub", icon: "./image/github.png" },
 { name: "Motion", icon: "./image/motion.png" },
  { name: "swiper", icon: "./image/swiper.png" },
  { name: "spline", icon: "./image/spline.png" },

   { name: "HTML", icon: "./image/html.png" },
  { name: "CSS", icon: "./image/css-3.png" },
  { name: "JavaScript", icon: "./image/js.png" },
  { name: "React", icon: "./image/atom.png" },
  { name: "Tailwind CSS", icon: "./image/telwind.png" },
  { name: "GSAP", icon: "./image/gsap..png" },
  { name: "Git", icon: "./image/git.png" },
  { name: "GitHub", icon: "./image/github.png" },
   { name: "Motion", icon: "./image/motion.png" },
    { name: "swiper", icon: "./image/swiper.png" },
      { name: "spline", icon: "./image/spline.png" },
];
const skillsB = [
  { name: "Node js", icon: "./image/node-js.png" },
  { name: "MongoDB", icon: "./image/MongoDB.png" },
   { name: "JavaScript", icon: "./image/js.png" },
  { name: "JWT", icon: "./image/jwt.png" },
  { name: "Node js", icon: "./image/node-js.png" },
   { name: "Git", icon: "./image/git.png" },
  { name: "GitHub", icon: "./image/github.png" },
   { name: "Node js", icon: "./image/node-js.png" },
  { name: "MongoDB", icon: "./image/MongoDB.png" },
   { name: "JavaScript", icon: "./image/js.png" },
  { name: "JWT", icon: "./image/jwt.png" },
 { name: "Node js", icon: "./image/node-js.png" },
  { name: "Git", icon: "./image/git.png" },
  { name: "GitHub", icon: "./image/github.png" },
];
const Skilles = () => {
  return (
    <section id="skills" className="py-16 bg-indigo-900 text-white">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-400">Technologies & Tools I work with</p>
        </div>
  <h1 className=" font-'Poppins', sans-serif;
    text-[30px]
    text-[#fff] ml-3 mb-5">Fernted Skills</h1>
              
    <div id="scroll"  className="w-full bg-indigo-900 overflow-x-auto scroll-smooth">
  <div id="scrollTriger" className="flex gap-4 whitespace-nowrap p-4">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col pt-3 items-center min-w-[100px] sm:min-w-[120px] md:min-w-[150px] h-[120px] bg-indigo-600 rounded-lg text-white
                   transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-indigo-500 hover:-translate-y-1 animate-[fadeIn_0.3s_ease-in-out]"
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 sm:w-12 sm:h-12 mb-2 transition duration-300 hover:rotate-15"
        />
        <h3 className="text-sm sm:text-base font-semibold text-center">{skill.name}</h3>
      </div>
      
    ))}
  </div>
</div>

<h1 className=" font-'Poppins', sans-serif;
    text-[30px]
    text-[#fff] ml-3 mb-5">backend Skills</h1>
    
    <div id="scroll" className="w-full bg-indigo-900 overflow-x-auto scroll-smooth">
  <div id="scrollTrigerleft" className="flex gap-4 whitespace-nowrap p-4">
    {skillsB.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col pt-3 items-center min-w-[100px] sm:min-w-[120px] hover:shadow-md hover:shadow-indigo-500 md:min-w-[150px] h-[120px] bg-indigo-600 rounded-lg shadow-lg text-white
                   transform transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-1 animate-[fadeIn_0.5s_ease-in-out]"
      >
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 sm:w-12 sm:h-12 mb-2 transition duration-300 hover:rotate-12"
        />
        <h3 className="text-sm sm:text-base font-semibold text-center">{skill.name}</h3>
      </div>
    ))}
  </div>
</div>
    </section>
  )
}

export default Skilles
