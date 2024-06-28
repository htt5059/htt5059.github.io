import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MyBrand from "../../utils/img/my_brand.jpg";
import Tag from '../Tag';

const colorDict = {
    "React": "#61DBFB",
    "Django": "#092E20",
    "Kubernetes": "#326CE5",
    "Docker": "#1D63ED",
    "IBM Cloud": "#1F70C1",
    "Boostrap": "#602C50",
    "JavaScript": "#F0DB4F",
    "Python": "#4B8BBE",
    "C#": "#512BD4",
    "ASP.NET": "#512DB4",
    "TailwindCSS": "#06B6D4",
    "Azure Cloud": "#008AD7",
    "Ignition": "#8CC63F",
    "SQL": "#512BD4",
    "MongoDB": "#4DB33D",
    "Git": "#F1502F",
    "AWS": "#000000",
    "Node.js": "#68A063",
    "Completed": "#008000",
    "Processing": "#0000FF",
    "Error": "#FF0000",
    "Warning": "#FFFF00"
}

class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgSrc: props.imgSrc ? props.imgSrc : "https://res.cloudinary.com/dppcodyz7/image/upload/v1719558043/my_brand_jfy4or.jpg",
            name: props.name ? props.name : "Project Card",
            skills: props.skills ? props.skills : [],
            description: props.description ? props.description : "Brief description",
            borderColor: props.borderColor ? props.borderColor : "#000000",
            url: props.url ? props.url : ""
        }
    }

    render(){
        return(
            <div className={"h-full ring ring-offset-2 ring-["+this.state.borderColor+"] bg-white border border-solid border-2 rounded-lg grid grid-cols-1 px-2 py-5"}>
                <div className="block h-30 w-full grid justify-items-center">
                    <img className="border-solid rounded-2xl" src={this.state.imgSrc} alt={this.state.name}/>
                    <span className="my-3 font-bold text-lg md:text-2xl">{this.state.name}</span>
                </div>
                <div className="flex flex-wrap justify-center">
                    {this.state.skills.map((skill) => (
                        <div key={skill}>
                            <Tag
                                bgColor={colorDict[skill]} 
                                textColor="#ffffff"
                                borderWidth={2}
                                borderColor="#000000"
                                tagName={skill}
                                shadowEffect={true}
                            />
                        </div>
                    ))}
                </div>
                <span className="font-bold">Brief:<p className="font-normal">{this.state.description}</p>
                </span>
                <br/>
                {this.state.url !== "" ?
                    <div className='w-fit'>
                        <a className='hover:underline hover:text-[#0000FF]' 
                            href={this.state.url} 
                            target="_blank" 
                            rel="noreferrer noopener"
                        >Link</a>
                    </div>
                    :
                    <></>
                }
            </div>
        )
    }
    
}

ProjectCard.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    skills: PropTypes.array,
    description: PropTypes.string,
    borderColor: PropTypes.string,
    url: PropTypes.string
}

export default ProjectCard;