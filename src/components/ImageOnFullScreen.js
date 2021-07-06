import React from 'react';
import {useMediaQuery} from "react-responsive";

const ImageOnFullScreen = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    return <img
        onClick={()=>{
            if(props.onClick!=undefined){
                props.onClick()
            }
        }}
        style={{
            cursor:props.pressAble?"pointer":'default',
            zIndex:100,
            width:props.width!=undefined?props.width:isDesktopOrLaptop? '100vmin':'85vmin',
            height: 'auto'
        }}
        src={props.image}
    />
}

export default ImageOnFullScreen;
