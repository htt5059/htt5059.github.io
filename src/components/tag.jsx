import React, { Component } from "react";

class Tag extends Component {
    constructor(props){
        super(props);
        if(props){
            
        }
        this.state = {
            bgColor: props.bgColor,
            tagName: props.tagName
        }
    }
    
    render() {
        return (
            <div className="w-fit m-1 border-solid rounded-md shadow-md shadow-black" style={{backgroundColor: this.state.bgColor}}>
                <span className="text-center text-xs font-bold text-white m-2">{this.state.tagName}</span>
            </div>
        )
    };
}

export default Tag;