import React, { Component, useState } from 'react';
import SearchBar from "../../SearchBar";
import CarDealerPic from "../../../utils/img/dealership-architecture.png";
import Blog from "../../../utils/img/Blog.png";
import ProjectCard from '../../cards/ProjectCard';

function Projects(){
    const projects = [
        {
            imgSrc: CarDealerPic,
            name: "Car Dealership",
            status: "Completed",
            url: '/project/car-dealership',
            description: "Build a car dealership website and host on Kubernetes. Leverage IBM Cloud Code Engine and NLP to create AI-powered microservices enhancing user engagements.",
            skills: [ "React", "Django", "Docker", "Kubernetes", "IBM Cloud", "Bootstrap", "MongoDB", "SQL", "Python", "JavaScript" ]
        },
        {
            imgSrc: Blog,
            name: "Blog",
            url: '/project/dong-a-blog',
            status: "Completed",
            description: "A blog website with AI-powered chatbot helps blog creators draft contents and delivers personalized blogs to users according to their preferences.",
            skills: [ "Azure Cloud", "TailwindCSS", "SQL", "C#", "ASP.NET" ]
        },
        {
            name: "Ignition HMIs Upgrade and Perspective Migration",
            url: '/project/ignition',
            status: "Completed",
            description: "Migrate Vision HMIs to Perspective utilizing Flex and Breakpoint containers to create responsive and mobile-friendly user interfaces (UIs)",
            skills: [ "Ignition", "Python", "SQL" ]
        },
        {
            name: "Smart Food Factory",
            url: '/project/smart-factory',
            status: "Processing",
            description: "A research of applying software engineering practices, clouds, containerization, AI/ML, and web design to Ignition Standard Edition utilizing the Web Dev module and a intermediate Node.js server.",
            skills: [ "Ignition", "Python", "SQL", "AWS", "Node.js", "React" ]
        }
    ]

    const statusColorList = {
        "Completed": "#008000",
        "Processing": "#0000FF",
        "Error": "#FF0000",
        "Warning": "#FFFF00"
    }

    const [projectList, setProjectList] = useState(projects)

    const checkSkills = (skillset, skill) => {
        let skillset_mod = skillset.map(skill => skill.toLowerCase());
        return skillset_mod.includes(skill);
    }

    const checkName = (name, query) => {
        return name.toLowerCase().includes(query);
    }

    const query = (params) => {
        let results = [];
        projects.forEach((project) => {
            if (checkName(project.name, params) || checkSkills(project.skills, params))
                results.push(project)
        }, results);
        setProjectList(results);
    }

    return(
        <div className="mx-3 lg:mx-7 my-5">
            {/* Page Title */}
            <>
                <h1 className="text-white text-2xl font-bold">Projects</h1>
                <hr className="h-px my-2 mx-12 bg-amber-300 border-0"/>
            </>
            
            <SearchBar callBack={query}/>
            
            <div className="py-5">
                {
                    projectList.length == 0?
                    <>
                        <span className="font-bold text-white flex justify-center">Project Not Found</span>
                        <p className="text-white">Are you looking for a project that's not in my portfolio? I'm always open to new ideas and collaborations.</p>
                        <hr className="h-px my-2 mx-12 bg-amber-300 border-0"/>
                    </>
                    :
                    <></>
                }
                <div id="project-list" className="grid grid-cols-1 md:grid-cols-2 content-stretch m-2 gap-4">
                    {
                        projectList.length == 0 ? 
                        projects.map(project => (
                            <ProjectCard
                                imgSrc={project.imgSrc}
                                name={project.name}
                                skills={[project.status].concat(project.skills)}
                                description={project.description}
                                borderColor={statusColorList[project.status]}
                            />
                        ))
                        : projectList.map(project => (
                            <ProjectCard
                                imgSrc={project.imgSrc}
                                name={project.name}
                                skills={[project.status].concat(project.skills)}
                                description={project.description}
                                borderColor={statusColorList[project.status]}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;