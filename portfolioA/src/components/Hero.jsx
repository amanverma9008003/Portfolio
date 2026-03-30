import React from 'react'
import {hero} from '../assets/assets'
const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center max-md:text-center 
    justify-between mt-5 pb-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start">
            <button className="mt-16 mb-2 flex items-center space-x-2 border border-indigo-600
            text-indigo-600 text-[10px] rounded-full px-4 py-1.5 hover:bg-indigo-50">
                🔥 Building the future, one line of code at a time.
            </button>

            <h1 className="text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-xl">
                I’m Aman Verma, a <span className="text-indigo-600">Full-Stack Web & ML Developer</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base">
                Building scalable web apps and intelligent machine learning solutions that power modern experiences.
            </p>

            <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
                <a href="#contact" className="bg-indigo-600 text-white px-5 py-2 font-semibold rounded-full text-md hover:bg-indigo-700">
                    <span>Contact me </span><i className="fa-solid fa-chalkboard-user" style={{color: 'rgb(251, 251, 252)'}}></i>
                </a>

                <a href="../assets/Resume.pdf" download className="text-indigo-600 bg-indigo-100 px-5 py-2 font-semibold rounded-full text-md hover:bg-indigo-200" >
                    Get Resume <i className="fa-solid fa-download" style={{color: 'rgb(89, 41, 233)'}}></i>
                </a>
            </div>
        </div>

        {/* Right Images */}
        <div className="mt-12 grid grid-cols-2 gap-6 pb-6">
            {hero.map((src, i) => (
            <img
            key={i}
            src={src}
            className="w-36 h-44 rounded-lg hover:scale-105 transition object-cover shadow-lg"/>
            ))}
        </div>
    </main>
  );
}

export default Hero