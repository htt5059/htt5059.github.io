import React, { Component } from "react";
import PropTypes from 'prop-types'

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


Tag.propTypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
    tagName: PropTypes.string
}
export default Tag;