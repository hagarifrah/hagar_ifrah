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
            borderRadius:(props.item.marginBetweenImages||props.item.ImageOnFullScreen)?isDesktopOrLaptop ? '0.5vw' : '1vh':0,
            userSelect:'none',
            outline:'none',
            cursor:props.pressAble?"pointer":'default',
            zIndex:200,
            width:props.width!=undefined?props.width:isDesktopOrLaptop? '100vmin':'90vmin',
            height: 'auto',
        }}
        src={props.image}
    />
}

export default ImageOnFullScreen;
