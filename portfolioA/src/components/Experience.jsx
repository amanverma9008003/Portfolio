
import {useState} from 'react'
import {images} from '../assets/assets'

const Experience = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <section className="pt-10 max-sm:pb-10 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full " id='experience'>
            <h1 className="text-3xl font-semibold text-center text-gray-900 mx-auto">Experience</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto px-2">
                "I blend full-stack craftsmanship with machine learning precision to deliver products that scale and inspire."
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />
                <div className="px-4 md:px-0" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-emerald-100 border border-transparent group-hover:border-emerald-300 flex gap-4 rounded-xl transition-colors">
                            <i className="fa-solid fa-brain text-2xl text-emerald-600"></i>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Machine Learning</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Build AI models for prediction, NLP, and computer vision with production-ready pipelines.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-cyan-100 border border-transparent group-hover:border-cyan-300 flex gap-4 rounded-xl transition-colors">
                            <i className="fa-solid fa-chart-line text-2xl text-cyan-600"></i>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Data Scientist</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Turn data into insights using feature engineering, modeling, and interpretability tools.</p>
                            </div>
                        </div>
                    </div>

                    <div className={"flex items-center justify-center gap-6 max-w-md group cursor-pointer"}>
                        <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300  flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
                            <i className="fa-solid fa-laptop-code text-2xl text-violet-600"></i>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Full-Stack Development</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Create scalable web platforms with React, Node.js, and cloud-optimized architecture.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
                        <div className="p-6 group-hover:bg-blue-100 border border-transparent group-hover:border-blue-300 flex gap-4 rounded-xl transition-colors">
                            <i className="fa-solid fa-briefcase text-2xl text-blue-600"></i>
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">Consulting & Freelance</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Deliver end-to-end solutions for clients with agile project delivery.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
};

export default Experience