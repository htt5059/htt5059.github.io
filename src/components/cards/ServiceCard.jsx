import React, { Component } from 'react'
import ServiceDialog from '../Dialog';
import PropTypes from 'prop-types';

class ServiceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id ? props.id : 0,
            name: props.name ? props.name : "Undefined",
            description: props.description ? props.description : {key: "Undefined", value: "Undefined"},
            borderColor: props.borderColor ? props.borderColor : "white",
            borderWidth: props.borderWidth ? props.borderWidth : 1,
            isOpen: false
        };
    }

    open = () => {
        this.setState({isOpen: true});
    }

    changeDialogState = (newState) => {
        this.setState({isOpen: newState});
    }

    render(){
        return(
            <div id={this.state.id} className={"relative border border-solid" + " border-" + this.state.borderWidth + " " +"rounded-lg"} style={{borderColor: this.state.borderColor}}>
                <div className="flex hidden md:block absolute right-2 top-1">
                    <button className="" onClick={this.open}>
                        <svg className="h-3 w-3 hover:h-4 hover:w-4 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                        </svg>
                    </button>
                </div>
                <div className="p-3">
                    <div className="flex flex-wrap h-16 md:h-20 items-center">
                        <div className="justify-center w-full">
                            <p className="text-white font-bold text-center text-md">{this.state.name}</p>                    
                        </div>
                    </div>
                    <hr className="h-px mx-1 bg-amber-400 border-0"/>
                    <div className="my-3">
                        <ul className="list-disc list-inside">
                            {this.state.description.map(
                                (item) => (
                                    <li key={item.key} className="font-bold text-white text-sm my-2">{item.key}</li> 
                                )
                            )}
                        </ul>
                    </div>
                </div>
                {this.state.isOpen ? 
                    <ServiceDialog 
                        isOpen={this.state.isOpen} 
                        name={this.state.name} 
                        description={this.state.description} 
                        callBack={this.changeDialogState}
                    /> : <></>}
                
            </div>
        );
    }
}

ServiceCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.array,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number
}

export default ServiceCard;