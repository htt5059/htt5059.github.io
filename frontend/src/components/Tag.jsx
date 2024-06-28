import React, { Component } from "react";
import PropTypes from 'prop-types'
import { getContrastColor } from "../utils/functions/getContrastColor";

class Tag extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            bgColor: props.bgColor ? props.bgColor : "#1E1E1E",
            color: getContrastColor(props.bgColor ? props.bgColor : "#1E1E1E"),
            borderColor: props.borderColor ? props.borderColor : "#ffffff",
            borderWidth: props.borderWidth ? props.borderWidth : 1,
            tagName: props.tagName,
            shadowEffect: props.shadowEffect ? props.shadowEffect : false,
            shadowColor: props.shadowColor ? props.shadowColor : "#ffffff",
            tagDesign: ""
        }

        this.state.tagDesign = this.setTagDesign(this.state.shadowEffect);
    }

    setTagDesign(hasShadowEffect){
        let tagDesign = ""
        if(hasShadowEffect)
            tagDesign = "w-fit m-1 border-solid rounded-full shadow-md shadow-black"
        else
            tagDesign = "w-fit m-1 border-solid rounded-full"

        return tagDesign
    }
    

    render() {
        // const baseTagDesign = "w-fit m-1 border-solid rounded-full"
        const contrastVal = getContrastColor(this.state.bgColor)
        console.log(this.state.tagDesign)
        return (
            <div className={this.state.tagDesign}
                style={{
                        backgroundColor: this.state.bgColor,
                        border: this.state.borderWidth+'px solid ' + this.state.borderColor,
                    }}>
                <span className={"text-center text-xs font-bold m-2"} style={{color: this.state.color}}>
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
    borderWidth: PropTypes.number,
    tagName: PropTypes.string,
    shadowEffect: PropTypes.bool,
    shadowColor: PropTypes.string
}
export default Tag;