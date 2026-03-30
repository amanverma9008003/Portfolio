import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
    const educationData = [
    {
        year: "2022 - Present",
        title: "BACHELOR DEGREE",
        desc: "(DSMNRU) Institute of Engineering and Technology Lucknow",
    },
    {
        year: "2021 - 2022",
        title: "HIGHER SECONDARY CERTIFICATE",
        desc: "New Public Collegiate Inter College Lucknow Uttar Pradesh (83.4%)",
    },
    {
        year: "2019 - 2020",
        title: "SECONDARY SCHOOL CERTIFICATE",
        desc: "New Public Collegiate Inter College Lucknow Uttar Pradesh (88%)",
    },
    ];

    export default function Education() {
    return (
        <section className="pt-5 max-sm:pb-10 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full" id="education">
        
        {/* Neon Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200 blur-[120px] opacity-30"></div>

        <h1 className="text-3xl font-semibold text-gray-900 text-center mx-auto">Education</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto pb-8 px-2">
                "Education is the most powerful weapon which you can use to change the world."
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-center max-w-10xl mx-auto">
                
                {/* Left Illustration */}
                <div className="flex justify-center">
                <DotLottieReact
            src="https://lottie.host/d7b57bfe-0eb7-4cc3-91d0-f4588d13298b/ANOcXhMxfd.lottie"
            loop
            autoplay className="w-full h-auto"/>
                </div>

            {/* Right Cards */}
            <div className="space-y-6">
                
                <motion.div  whileHover={{ scale: 1.03 }} className="relative p-[2px] rounded-xl group" >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 opacity-0  blur-sm transition duration-500 "></div>
                        <div className="relative bg-white rounded-xl p-4 shadow-lg group-hover:bg-sky-100 border border-transparent group-hover:border-sky-300">
                        <div className="flex gap-4 items-center">
                            <div className="text-2xl border-2 border-sky-300 rounded-md px-2 py-1">
                                <i className="fa-solid fa-user-graduate" style={{ color: 'rgb(106, 222, 243)' }}></i>
                            </div>
                            <div className="relative">
                                <p className=" text-[0.675rem] md:text-sm  text-indigo-600 font-medium mb-2">{educationData[0].year}</p>
                                <h3 className=" text-md md:text-lg md:text-lg font-semibold text-gray-800">{educationData[0].title}</h3>
                                <p className="text-gray-500 text-[0.8rem] md:text-sm mt-2">{educationData[0].desc}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </motion.div>

                <motion.div  whileHover={{ scale: 1.03 }} className="relative p-[2px] rounded-xl group" >
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>
                    {/* Card Content */}
                    <div className="relative bg-white rounded-xl p-4 shadow-lg group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300">
                        <div className="flex gap-4 items-center">
                            <div className="text-2xl border-2 border-indigo-300 rounded-md px-2 py-1">
                                <i className="fa-solid fa-user-graduate" style={{ color: 'rgb(191, 94, 244)' }}></i>
                            </div>
                            <div className="relative">
                                <p className="text-[0.675rem] md:text-sm text-indigo-600 font-medium mb-2">{educationData[1].year}</p>
                                <h3 className="text-md md:text-lg font-semibold text-gray-800">{educationData[1].title}</h3>
                                <p className="text-gray-500 text-[0.8rem] md:text-sm mt-2">{educationData[1].desc}</p>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>

                <motion.div  whileHover={{ scale: 1.03 }} className="relative p-[2px] rounded-xl group" >
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 via-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>
                    {/* Card Content */}
                    <div className="relative bg-white rounded-xl p-4 shadow-lg group-hover:bg-pink-100 border border-transparent group-hover:border-pink-300">
                        <div className="flex gap-4 items-center">
                            <div className="text-2xl border-2 border-pink-200 rounded-md px-2 py-1">
                                <i className="fa-solid fa-user-graduate" style={{ color: 'rgb(248, 118, 248)' }}></i>
                            </div>
                            <div className="relative">
                                <p className=" text-[0.675rem] md:text-sm  text-indigo-600 font-medium mb-2">{educationData[2].year}</p>
                                <h3 className=" text-md md:text-lg font-semibold text-gray-800">{educationData[2].title}</h3>
                                <p className="text-gray-500 text-[0.8rem] md:text-sm mt-2">{educationData[2].desc}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
        </section>
    );
    }