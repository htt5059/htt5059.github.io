import React, { Component } from "react";

class Tag extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            bgColor: props.bgColor ? props.bgColor : "#000000",
            textColor: props.textColor ? props.textColor : "#ffffff",
            borderColor: props.borderColor ? props.borderColor : "#ffffff",
            tagName: props.tagName
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div className="w-fit m-1 border-solid rounded-full shadow-md shadow-black" 
                style={{
                        backgroundColor: this.state.bgColor,
                        border: '1px solid ' + this.state.borderColor
                    }}>
                <span className="text-center text-xs font-bold m-2"
                style={{color: this.state.textColor}}>
                    {this.state.tagName}
                </span>
            </div>
        )
    };
}

export default Tag;