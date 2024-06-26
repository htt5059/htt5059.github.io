import { hex2Rgb } from "./hex2Rgb";

function getContrastColor(hex){
    const rgb = hex2Rgb(hex)
    const brightness = 0.212*rgb[0] + 0.7152*rgb[1] + 0.0722*rgb[2]
    if(brightness >= 128)
        return "#000000"
    else return "#ffffff"
}

export {getContrastColor};