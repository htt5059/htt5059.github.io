import React from "react";

function AboutMe(){
    return(
        <div className="mx-3 my-5">
           {/* Page Title */}
           <>
                <h1 className="text-white text-2xl font-bold">About Me</h1>
                <hr className="h-px my-2 mx-12 bg-amber-300 border-0"/>
           </>
           <p className="text-white">
                I love building software in manufacturing environments and leveraging cutting-edge technologies (Cloud, Kubernetes, Docker) to enhance software peformance and extend functionalities.
           </p>
           {/* Services */}
           <div className="my-5">
                <>
                    <h2 className="text-white text-lg font-bold">Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 content-stretch m-2">
                        <div className="border border-solid rounded-lg p-3" style={{borderColor: "#4169E1"}}>
                            <div className="flex flex-wrap justify-center">
                                <p className="md:flex md:items-end md:h-12 lg:h-auto text-white font-bold text-center text-md">Industrial Automation</p>
                            </div>
                            <hr className="h-px mx-1 bg-amber-400 border-0"/>
                        </div>
                    </div>
                </>
                
           </div>
        </div>
    );
}

export default AboutMe;