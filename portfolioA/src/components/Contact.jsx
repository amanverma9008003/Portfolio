import { useState } from "react"

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e7b9f196-327c-4de2-8040-a01ee23afc5e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

    return (
            <section className="pt-5 max-sm:pb-10 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full mt-8 md:mt-16 pb-16" id="contact">
                <h1 className="text-xl font-semibold text-center text-gray-900 mx-auto mb-2">Contact me </h1>
                <p className=" text-sm text-slate-500 text-center mt-2 w-auto max-w-lg mx-auto pb-16 px-3">
                    "Have a question or idea? Our approachable team would love to connect and support you."
                </p>
                <div className="grid md:grid-cols-2 md:gap-10 lg:gap-20 max-w-7xl w-full items-center">

                    <div className="p-5 border-2 border-gray-300 rounded-lg">
                        <h1 className="text-xl font-medium text-indigo-600 text-center md:text-start mb-3 tracking-tight max-md:mb-5">
                            Get in touch
                        </h1>
                        <p className=" max-md:hidden text-sm/8 text-gray-400 text-center md:text-start mx-auto md:mx-0 mb-8 leading-relaxed max-w-[400px]">
                            Feel free to reach out for collaborations, questions, or just a friendly chat. I’m always open to connect.
                        </p>

                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-2 gap-3 mb-5">
                                <div>
                                    <label className="block text-sm text-indigo-500 mb-1.5">First name</label>
                                    <input type="text" placeholder="First" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-sm text-indigo-500 mb-1.5">Last name</label>
                                    <input type="text" placeholder="Last" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />  
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-indigo-500 mb-1.5">Email id</label>
                                <input type="email" placeholder="xyz@abcd.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"/>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-indigo-500 mb-1.5">Phone number</label>
                                <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors">
                                    <select className="px-3 py-2 text-sm outline-none cursor-pointer text-gray-200 bg-indigo-400 border-r border-gray-300">
                                        <option>US</option>
                                        <option>UK</option>
                                        <option>IN</option>
                                        <option>CA</option>
                                    </select>
                                    <input type="tel" placeholder="+1 342 123-456" className="flex-1 px-3 py-2 text-sm outline-none" />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block text-sm text-indigo-500 mb-1.5">Message</label>
                                <textarea rows="4" className="w-full px-3 py-2 border border-indigo-300 rounded-lg text-sm outline-none resize-y focus:border-indigo-500 transition-colors"/>
                            </div>

                            <button type="submit" className="w-full py-3.5 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]" >
                                Send message
                            </button>
                            <span>{result}</span>
                        </form>
                    </div>

                    <div className=" w-full md:flex flex-col items-baseline justify-start overflow-hidden gap-6 pt-5">
                        <div className="flex flex-col max-md:hidden gap-5">
                            <p ><span className="text-lg text-indigo-400 hover:bg-indigo-400 rounded-full  hover:text-gray-50 p-1"><i className="fa-solid fa-at"></i></span> <span className="text-md md:text-lg text-gray-600 font-medium">abhaykilvil0101@gmail.com</span></p>
                            <p ><span className="text-lg text-indigo-400 hover:bg-indigo-400 rounded-full  hover:text-gray-50 p-1"><i className="fa-solid fa-phone" ></i></span> <span className="text-md md:text-lg text-gray-600 font-medium">+91 - 9506959008</span></p>
                            <p ><span className="text-lg text-indigo-400 hover:bg-indigo-400 rounded-full  hover:text-gray-50 p-1"><i className="fa-solid fa-map-marker-alt" ></i></span> <span className="text-md md:text-lg text-gray-600 font-medium">Lucknow Uttar Pradesh, India - 226008</span></p>
                        </div>
                        
                        <div className="flex items-center gap-4 md:gap-8  justify-center md:justify-start  ">
                            <a href="https://github.com/amanverma9008003" target="_blank" rel="noopener noreferrer" className="text-lg md:text-3xl text-indigo-400 hover:bg-indigo-400 rounded-full  hover:text-gray-50">
                                <i className="fa-brands fa-square-git p-2"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/aman-verma9008/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-3xl text-indigo-400 hover:bg-indigo-400 rounded-full  hover:text-gray-50">
                                <i className="fa-brands fa-linkedin-in p-2"></i>
                            </a>

                            <a href="https://www.instagram.com/aman_verma__31/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-3xl text-indigo-400 hover:bg-indigo-400 rounded-full hover:text-gray-50">
                                <i className="fa-brands fa-instagram p-2"></i>
                            </a>

                            <a href="https://t.me/+919506959008" target="_blank" rel="noopener noreferrer" className="text-lg md:text-3xl text-indigo-400 hover:bg-indigo-400 rounded-full hover:text-gray-50">
                                <i className="fa-brands fa-telegram p-2"></i>
                            </a>

                            <a href="https://www.hackerrank.com/profile/abhaykilvil0101" target="_blank" rel="noopener noreferrer" className="text-lg md:text-3xl text-indigo-400 hover:bg-indigo-400 rounded-full  hover:text-gray-50">
                                <i className="fa-brands fa-hackerrank p-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Contact