import React from 'react';
import {useMediaQuery} from "react-responsive";

const ImageOnFullScreen = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    return <img
        style={{
            zIndex:100,
            width:isDesktopOrLaptop? '100vmin':'85vmin',
            height: 'auto'
        }}
        src={props.image}
    />
}

export default ImageOnFullScreen;
