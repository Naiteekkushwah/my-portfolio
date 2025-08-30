import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const linksRef = useRef([]);
  const tl = useRef(gsap.timeline({ paused: true }));

  const menuItems = ["Home", "About", "Services", "Skills", "Contact","Projects"];

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(panelRef.current, {
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    tl.current.fromTo(
      linksRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-2 right-4  z-50 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Menu Panel */}
      <div
        ref={panelRef}
        className="fixed pl-10 top-0 right-[-170px] w-full h-screen bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl z-40 transform translate-x-full flex flex-col justify-center items-start space-y-6"
      >
        {menuItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            ref={(el) => (linksRef.current[index] = el)}
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl font-semibold hover:text-blue-400 transition duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default MobileMenu;
