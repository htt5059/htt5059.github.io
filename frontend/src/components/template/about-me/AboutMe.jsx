import React from "react";
import ServiceCard from "../../cards/ServiceCard";

function AboutMe(){
    const services = [
        {
            id: 0,
            name: "Industrial Automation", 
            description: [
                {
                    key: "Ignition HMI Development and Migration",
                    value: "Design, develop, and migrate Ignition Vision HMIs to modern, mobile-friendly web applications using responsive UI design principles."
                },
                {
                    key: "Manufacturing Process Optimization",
                    value: "Utilize automation processes and cloud technologies to enhance software services, improve performance, and extend functionalities for manufacturing environments."
                }
            ]
        },
        {
            id: 1,
            name: "Full-Stack Development",
            description: [
                {
                    key: "Web Application Development",
                    value: "Develop scalable and secure web applications using technologies like .NET, Node/Express, cloud services, and best practices."
                },
                {
                    key: "API Development and Integration",
                    value: "Create robust APIs that seamlessly integrate with existing systems and provide secure access to data and core features."
                },
                {
                    key: "Database Management",
                    value: "Optimize database performance by utilizing techniques like CTE, normalizations, and pagination for efficient data retrieval."
                },
                {
                    key: "Front-End Development",
                    value: "Design user-friendly and responsive user interfaces (UIs) using modern frameworks like React and Tailwind."
                }
            ]
        },
        {
            id: 2,
            name: "Others",
            description: [
                {
                    key: "Software Performance Optimization",
                    value: "Analyze and optimize software performance utilizing data structures and algorithms."
                },
                {
                    key: "Software Migration Planning and Execution",
                    value: "Migrate monolithic applications to web-based and cloud-native solutions."
                },
                {
                    key: "Software Testing and Quality Assurance",
                    value: "Design test plans according to the level of software development and use cases, from unit testing, integration testing, system testing, to acceptance testing."
                }
            ]
        }
    ]

    return(
        <div className="mx-3 lg:mx-7 my-5">
           {/* Page Title */}
           <>
                <h1 className="text-white text-2xl font-bold">About Me</h1>
                <hr className="h-px my-2 mx-12 bg-amber-300 border-0"/>
           </>
           <p className="text-white text-justify">
                An engineer loves building software in manufacturing environments and leveraging cutting-edge technologies (Cloud, Kubernetes, Docker) to enhance software peformance and extend functionalities.
           </p>

           {/* Services */}
            <div className="my-5">
                <h2 className="text-white text-lg font-bold">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 content-stretch m-2 gap-2">
                    {
                        services.map(
                            (service) => (
                                <div key={service.id}>
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        description={service.description}
                                        borderWidth={2}
                                        borderColor={"#4169E1"}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
            </div>

           {/* Collaborations */}
            <div className="my-5">
                <h2 className="text-white text-lg font-bold">Collaborations</h2>
                <div className="m-2 border border-2 rounded-lg">
                    <div className="overflow-x-auto flex flex-nowrap justify-around mx-5 lg:mx-20 my-3">
                        <div id="pda" className="mx-2 w-28">
                            <img className="h-28 bg-white" src="https://www.processanddata.com/wp-content/themes/pda-site/img/Process-and-Data-Automation.svg" alt="Process and Data Automation"/>
                            <p className="w-28 text-white font-bold text-sm text-center">
                                Process and Data Automation
                            </p>
                        </div>
                        <div id="erie-water-works" className="mx-2 w-28">
                            <img className="h-28 bg-white" src="https://www.eriewater.org/wp-content/uploads/2022/10/logo-mobile-alt.svg" alt="Erie Water Works"/>
                            <p className="w-28 text-white font-bold text-sm text-center">
                                Erie Water Works
                            </p>
                        </div>
                        <div id="amys-kitchen" className="mx-2 w-28">
                            <img className="h-28 bg-white" src="https://www.amys.com/frontend/img/logos/amys-kitchen-green.svg?v1" alt="Amy's Kitchen"/>
                            <p className="w-28 text-white font-bold text-sm text-center">
                                Amy&apos;s Kitchen
                            </p>
                        </div>
                        <div id="welchs" className="mx-2 w-28">
                            <img className="h-28 bg-white" src="https://www.welchs.com/img/logo-welchs.243e73a.svg" alt="Welch's"/>
                            <p className="w-28 text-white font-bold text-sm text-center">
                                Welch&apos;s
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;