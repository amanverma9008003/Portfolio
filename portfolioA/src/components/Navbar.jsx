import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <header className="flex items-center justify-between pr-6 md:px-16 lg:px-24 xl:px-32 py-1 w-full border-b border-gray-200">
        <a href="/" className="flex items-center " >
            <DotLottieReact
            src="https://lottie.host/58cf9cc1-65c0-4215-92a9-6a7ddeb40b5c/VZcyHWfnjY.lottie"
            loop
            autoplay 
            className=" relative w-30 h-20 -left-10 "
            /><span className="relative text-3xl font-semibold  text-gray-800 -left-18">aman<span className="relative text-3xl font-semibold  text-indigo-700 ">Vm</span></span>
        </a>

        {/* Menu */}
      <nav className={`${
            isOpen ? "max-md:w-full" : "max-md:w-0"
            } max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full transition-[width] max-md:bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm`}>
            
            <a className="hover:text-indigo-600 text-medium md:font-medium hover:underline " href="#about" style={{fontFamily: "Manrope"}}>About</a>
            <a className="hover:text-indigo-600 text-medium md:font-medium hover:underline " href="#skills" style={{fontFamily: "Manrope"}}>Skills</a>
            <a className="hover:text-indigo-600 text-medium md:font-medium hover:underline " href="#education" style={{fontFamily: "Manrope"}}>Education</a>
            <a className="hover:text-indigo-600 text-medium md:font-medium hover:underline " href="#experience" style={{fontFamily: "Manrope"}}>Experience</a>

        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-600 text-xl absolute top-4 right-4">
            <i className="fa-solid fa-x "></i>
        </button>
      </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
            <a className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 gap-2 flex items-center" href="#projects" style={{fontFamily: "Manrope"}}>
                Works <i class="fa-solid fa-briefcase"></i>
            </a>
            <a className="text-indigo-800 bg-indigo-200 px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-100 gap-2 flex items-center" href="#contact" style={{fontFamily: "Manrope"}}>
                Contact <i class="fa-regular fa-message"></i>
            </a>
        </div>

        {/* Open Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-gray-600" >
            <i className="fa-solid fa-bars "></i>
        </button>
    </header>
  );
}