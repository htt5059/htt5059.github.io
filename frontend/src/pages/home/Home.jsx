import React, { useState } from "react";
import Tag from "../../components/Tag";
import Nav from "../../components/Nav";
import Avatar from '../../utils/img/AR_Self.jpg';
import AboutMe from "../../components/template/about-me/AboutMe";
import Contact from "../../components/template/contact/Contact";
import Project from "../../components/template/projects/Projects";

function Home(){
    const [currentPage, setCurrentPage] = useState('About');
    const navigation = ["About", "Projects", "Contact"]

    const changePage = (currentPage) => {
        if(navigation.includes(currentPage))
            setCurrentPage(currentPage);
    };

    return(
        <div className="md:flex md:place-items-stretch w-full mx-2 md:mx-4 lg:mx-6 absolute bottom-2 top-2 md:bottom-4 md:top-4 lg:bottom-6 lg:top-6">
            <aside className="relative m-2 pt-5 pb-5 md:w-1/3 lg:w-1/4 border-solid border-4 rounded-lg" style={{borderColor: "#EFBF04"}}>
                <div className="mr-2 ml-2 grid justify-center">
                    <>
                        {/* Avatar and Full Name */}
                        <div className="grid justify-items-center">
                            <img className="h-32 border-solid rounded-3xl" src={Avatar} alt="Avatar"/>
                            <span className="my-4 font-bold text-white text-4xl md:text-2xl">Huy Tuan Tran</span>
                        </div>
                        {/* Job Titles */}
                        <div className="flex flex-wrap justify-center">
                            <Tag borderWidth={2} bgColor="rgb(38 38 38)" textColor="white" borderColor="#EFBF04" tagName="Software Engineer"/>
                            <Tag borderWidth={2} bgColor="rgb(38 38 38)" textColor="white" borderColor="#EFBF04" tagName="Ignition HMI Developer"/>
                            <Tag borderWidth={2} bgColor="rgb(38 38 38)" textColor="white" borderColor="#EFBF04" tagName="IBM Full Stack Developer"/>
                        </div>
                    </>
                    <hr className="h-px my-5 mx-3 bg-amber-300 border-0"/>
                    <>
                        {/* Contact Info */}
                        <div className="flex flex-wrap justify-around">
                            <a className="flex rounded-full px-2 hover:drop-shadow-lg hover:ring" href="mailto:tunhuytrn@gmail.com">
                                <div className="border-solid border-2 border-gray-500 rounded-md m-2 content-center">
                                    <svg className="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-white">Email</span>
                                </div>
                            </a>
                            
                            <a className="flex rounded-full px-2 hover:drop-shadow-lg hover:ring" href="https://www.linkedin.com/in/huy-tran-htt5059/" target="_blank" rel="noreferrer noopener">
                                <div className="border-solid border-2 border-gray-500 rounded-md m-2 content-center">
                                    <svg className="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-white">LinkedIn</span>
                                </div>
                            </a>                            

                            <a className="flex rounded-full px-2 hover:drop-shadow-lg hover:ring" href="https://github.com/htt5059/" target="_blank" rel="noreferrer noopener">
                                <div className="border-solid border-2 border-gray-500 rounded-md m-2 content-center">
                                    <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-white">GitHub</span>
                                </div>
                            </a>
                        </div>
                    </>
                </div>
            </aside>
            
            <div className="overflow-y-auto m-2 md:w-2/3 lg:w-3/4 md:float-right border-solid border-4 rounded-lg border-white flex flex-col items-scretch">
                <Nav currentPage={changePage}/>
                <div className="h-full flex flex-col items-scretch">
                    {
                        currentPage === "About" ?
                        <AboutMe/> : currentPage === "Projects" ?
                        <Project/> : <Contact/>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Home;