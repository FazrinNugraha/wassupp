import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const typedElement = useRef(null);
  

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          "Transforming Ideas into Powerful Web Applications",
          "Building Scalable & User-Centric Solutions",
          "Creating Amazing Digital Experiences",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: "|",
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#050f19] overflow-hidden"
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3ecf8e" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-hero)" />
        </svg>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" fill="none">
          <line x1="0" y1="0" x2="400" y2="400" stroke="#3ecf8e" strokeWidth="2"/>
          <line x1="400" y1="0" x2="0" y2="400" stroke="#3ecf8e" strokeWidth="2"/>
          <circle cx="200" cy="200" r="150" stroke="#3ecf8e" strokeWidth="2"/>
          <circle cx="200" cy="200" r="200" stroke="#3ecf8e" strokeWidth="1"/>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" fill="none">
          <polygon points="200,50 350,200 200,350 50,200" stroke="#3ecf8e" strokeWidth="2"/>
          <polygon points="200,100 300,200 200,300 100,200" stroke="#3ecf8e" strokeWidth="1"/>
          <line x1="200" y1="50" x2="200" y2="350" stroke="#3ecf8e" strokeWidth="1"/>
          <line x1="50" y1="200" x2="350" y2="200" stroke="#3ecf8e" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#3ecf8e] overflow-hidden mx-auto">
            <div>
              <img
                src="public/pp.jpeg"
                alt="Avatar"
                className="w-48 h-48 rounded-full border-1 border-[#3ecf8e] shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Welcome to My Portfolio
        </h1>

        {/* Typing Text */}
        <div className="h-20 mb-8 flex items-center justify-center">
          <p className="text-lg md:text-2xl text-[#94a3b8]">
            <span ref={typedElement}></span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#3ecf8e] text-[#050f19] font-semibold rounded-lg hover:bg-[#5edeb3] transition-all duration-300 hover:scale-105"
          >
            View Projects
            <ArrowRight size={20} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#3ecf8e] text-[#3ecf8e] font-semibold rounded-lg hover:bg-[#3ecf8e] hover:text-[#050f19] transition-all duration-300"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-15 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        {/* Mouse Icon */}
        <div className="w-6 h-10 border-2 border-[#3ecf8e] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#3ecf8e] rounded-full"></div>
        </div>

        {/* Scroll Text */}
        <span className="text-xs tracking-widest text-[#3ecf8e] uppercase">
          Scroll Me
        </span>
      </div>
    </section>
  );
}
