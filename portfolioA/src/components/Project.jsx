
import { useState, useEffect } from "react";
import { projects } from '../assets/assets';

export default function Projects() {
    const images = [
        [projects.cityWeather, "MausamHaal", "This is a simple weather app that provides real-time weather information for any location.","https://mausamhaal2.netlify.app/","https://github.com/amanverma9008003/Weather-App"],
        [projects.Ecommerce, "E-commerce Platform", "This is a comprehensive e-commerce platform for online shopping.","https://ecommercewebpag.netlify.app/","https://github.com/amanverma9008003/ecommerce-frontend"],
        [projects.fraud_transaction, "Fraud Transaction Detection", "This is a machine learning model for detecting fraudulent transactions.","https://predictive-transaction-intelligence.vercel.app/","https://github.com/amanverma9008003/fraud_transaction_management"],
        [projects.movieBooking, "Quickshow Movies", "This is a movie booking app that allows users to book tickets for their favorite movies.","https://quick-show-wj4f.vercel.app/","https://github.com/amanverma9008003/quickShow"],
        [projects.realState, "H-state", "This is a real estate platform for buying and selling properties.","https://hstate.vercel.app/","https://github.com/amanverma9008003/hstate"],
        [projects.smartgpt, "SmartGPT", "This is an AI-powered chatbot for answering user queries.","https://smartact.netlify.app/","https://github.com/amanverma9008003/Smartgpt"],
        [projects.stockFront, "Zerodha Stock Trade", "This is a stock trading platform for buying and selling stocks.","https://stock-trade-azure.vercel.app/","https://github.com/amanverma9008003/StockTrade"],
        [projects.text_image, "Text to Image Generator", "This is an AI model for generating images from text descriptions.","https://text-image-mqpw.vercel.app/","https://github.com/amanverma9008003/TextImage"],
        [projects.healthlone, "Predict Healthlone", "This is a health prediction model for early disease detection.","https://loanprediction-dwkolf2z54snemvnn8sdxr.streamlit.app/","https://github.com/amanverma9008003/Loan_prediction"],

    ];
    
    const [mainImage, setMainImage] = useState(images[0][0]);
    const [currentTitle,setcurrentTitle] = useState(images[0][1]);
    const [currentDescription,setcurrentDescription] = useState(images[0][2]);
    const [currentLink,setcurrentLink] = useState(images[0][3]);
    const [currentCodeLink,setcurrentCodeLink] = useState(images[0][4]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleStart, setVisibleStart] = useState(0);
    const totalSlides = images.length;
    const visibleCount = 4;

    const goToSlide = (index) => {
        setCurrentSlide(index);
        if (index < visibleStart) {
            setVisibleStart(index);
        } else if (index >= visibleStart + visibleCount) {
            setVisibleStart(Math.min(index - visibleCount + 1, totalSlides - visibleCount));
        }
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % totalSlides;
        setCurrentSlide(next);

        if (next === 0) {
            setVisibleStart(0);
            return;
        }

        if (next >= visibleStart + visibleCount) {
            setVisibleStart((prevStart) => Math.min(prevStart + 1, Math.max(0, totalSlides - visibleCount)));
        }
    };

    const prevSlide = () => {
        const next = (currentSlide - 1 + totalSlides) % totalSlides;
        setCurrentSlide(next);

        if (next === totalSlides - 1) {
            setVisibleStart(Math.max(0, totalSlides - visibleCount));
            return;
        }

        if (next < visibleStart) {
            setVisibleStart((prevStart) => Math.max(0, prevStart - 1));
        }
    };

    useEffect(() => {
        setMainImage(images[currentSlide][0]);
        setcurrentTitle(images[currentSlide][1]);
        setcurrentDescription(images[currentSlide][2]);
        setcurrentLink(images[currentSlide][3]);
        setcurrentCodeLink(images[currentSlide][4]);
        
    }, [currentSlide]);


    const resetAutoSlide = () => {
        setCurrentSlide((prev) => prev);
    };

    return (
        <section className="flex flex-col items-center space-y-4 pt-10 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full pb-19" id="projects">
            
            <h1 className="text-3xl font-semibold text-gray-900 text-center mx-auto">Projects</h1>
            <p className="text-sm text-slate-500 text-center mt-1 max-w-lg mx-auto mb-10 px-2">
                "I blend full-stack craftsmanship with machine learning precision to deliver products that scale and inspire."
            </p>

            <div className=" relative group  w-full max-w-2xl mb-8 hover:max-w-3xl transition-all duration-500">
                    <img src={mainImage} className="w-full rounded-lg  shadow-2xl shadow-pink-200 object-cover hover:shadow-pink-300 hover:shadow-4xl" alt="Main" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl text-indigo-400">{currentTitle}</h1>
                        <p className="text-sm text-gray-200">{currentDescription}</p>
                        <div className="flex items-center gap-4 mt-4">
                            <button className="bg-indigo-500 text-white px-4 py-2 font-semibold rounded-full text-sm hover:bg-indigo-600">
                                <a href={currentLink} target="_blank" rel="noopener noreferrer" className="text-white">
                                    View Project <i class="fa-solid fa-link pl-2"></i>
                                </a>
                            </button>
                            <a href={currentCodeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 bg-indigo-200 px-4 py-2 font-semibold rounded-full text-sm hover:bg-indigo-400 hover:text-gray-100" >
                                View Code <i class="fa-solid fa-code pl-2"></i>
                            </a>
                        </div>
                    </div>
            </div>

            <div className="flex items-center justify-center w-full gap-5">
                <button
                    onClick={() => {
                        prevSlide();
                        resetAutoSlide();
                    }}
                    className="p-3 bg-black/30 rounded-full hover:bg-black/50 text-white"
                >
                    <i className="fa-solid fa-chevron-left text-2xl"></i>
                </button>

                <div className="grid grid-cols-4 gap-2 w-full max-w-3xl">
                    {Object.values(projects).slice(visibleStart, visibleStart + visibleCount).map((img, sliceIndex) => {
                        const index = visibleStart + sliceIndex;
                        return (
                            <button
                                key={index}
                                className={`rounded-lg overflow-hidden border ${
                                    currentSlide === index ? "ring-2 ring-indigo-500" : "border-slate-300"
                                }`}
                                onClick={() => {
                                    goToSlide(index);
                                }}
                            >
                                <img src={img} alt={`Thumb ${index + 1}`} className="w-full h-18 md:h-30  object-cover" />
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={() => {
                        nextSlide();
                        resetAutoSlide();
                    }}
                    className="p-3 bg-black/30 rounded-full hover:bg-black/50 text-white"
                >
                    <i className="fa-solid fa-chevron-right text-2xl"></i>
                </button>
            </div>

        </section>
    );
}
