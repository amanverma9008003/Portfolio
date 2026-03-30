import React from 'react'
import {icons} from '../assets/assets'
const Skills = () => {
    
    return (
        <section className="mt-10 flex flex-col items-center justify-center px-4 md:px-0 pb-16" id="skills">
            <h1 className="text-xl font-semibold text-center text-gray-900 mx-auto mb-2">Core Technical Strengths</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto mb-10 px-2">
                "Expert in modern web stack architecture and applied machine learning, turning data into scalable, production-ready solutions."
            </p>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none px-5 py-5 border-l-4 border-r-4 border-gray-300 rounded-lg">
                <div className="marquee-inner flex will-change-transform min-w-[200%] h-auto " style={{ animationDuration: "10s" }}>
                    <div className="flex gap-16">
                        {icons.map((icon, index) => (
                            <div key={index} className="flex flex-col items-center justify-center w-auto  aspect-square border border-indigo-400 bg-indigo-100 rounded-lg gap-2 px-2 py-4">
                                <img src={icon[0]} alt="Skill" className="w-6 sm:w-8" draggable={false} />
                                <p className="text-xs font-medium text-gray-700 ml-2">{icon[1]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Skills

{/*<li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                        <img src="./images/tailwindcss.png" alt="" class="w-5 sm:w-7">
                    </li>*/}