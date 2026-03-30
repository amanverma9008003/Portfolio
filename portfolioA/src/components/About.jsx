
import {useState} from 'react'
import Tools from './Tools';
import { legend } from '../assets/assets';
const About = () => {
    const [index, setIndex] = useState(0);
    return (
        <section className="bg-gradient-to-b from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] min-h-screen py-16 px-1" style={{fontFamily:'poppins'}} id='about'>
            
            <h1 className="text-3xl font-semibold text-center mx-auto">About me</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto px-2">
                "The only way to do great work is to love what you do."
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <img className="max-w-sm w-560 rounded-xl  h-115 shadow-lg hover:scale-105 transition duration-300 object-fit object-cover max-md:px-4"
                    onClick={()=>{setIndex((index+1)%3)}}
                    src={legend[index]}
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Who Am I ?</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        I am a passionate full-stack web and machine learning developer with a knack for crafting scalable solutions.
                        With expertise in both frontend and backend technologies,
                        I thrive on building seamless user experiences and intelligent applications. My journey in tech is
                        fueled by a love for problem-solving and a drive to create impactful digital products.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">

                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Lightning-Fast Performance</h3>
                                <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Beautifully Designed Components</h3>
                                <p className="text-sm text-slate-500">Modern, pixel-perfect UI components ready for any project.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Plug-and-Play Integration</h3>
                                <p className="text-sm text-slate-500">Simple setup with support for React, Node.js and Tailwind css.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <Tools />
                {/*
                *c,html,aws,css,js,react,javascript,mongo,git,tailwind,bootstrap,python
                 * ,colab,deep,docker,java,jupyter,machine,mysql,numpy,pandas,pytorch,vscode}; */}
        </section>
    );
};

export default About