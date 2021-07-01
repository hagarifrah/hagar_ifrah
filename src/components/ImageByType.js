import React, {useEffect, useState} from 'react';
import {APP_COLOR, TYPE_OF_IMAGE} from "../utils/Utils";
import '../index.css'
import {useMediaQuery} from "react-responsive";

const ImageByType = (props) => {

    const isDesktopOrLaptop = useMediaQuery({minDeviceWidth: 1224})
    const [hover, setHover] = useState(false);
    const dimension = isDesktopOrLaptop ? '25vh' : '65vw';
    const imageDivStyle = {
        cursor: props.image.image != -1 ? 'pointer' : undefined,
        height: dimension,
        width: isDesktopOrLaptop ? dimension : 'auto',
        marginLeft: isDesktopOrLaptop ? '0.5vw' : 0,
        marginRight: isDesktopOrLaptop ? '0.5vw' : 0,
        backgroundColor: hover && props.image.type === TYPE_OF_IMAGE.HOVER ? APP_COLOR.MAIN_COLOR : 'transparent',
        borderColor: 'transparent',
    }
    let filter = undefined;
    if (props.image.type === TYPE_OF_IMAGE.FILTERED && isDesktopOrLaptop) {
        if (!hover) {
            filter = 'grayscale(100%)';
        }
    }
    const imageStyle = {
        filter,
        height: hover && props.image.type === TYPE_OF_IMAGE.HOVER ? 0 : '100%',
    }
    const onMouseEnter = () => {
        if (props.image.image != -1) {
            setHover(true)
        }

    }
    const onMouseOut = () => {
        setHover(false)
    }

    return (

        <button onMouseLeave={onMouseOut} onMouseEnter={onMouseEnter} style={imageDivStyle}>
            {
                props.image.type === TYPE_OF_IMAGE.HOVER && hover &&
                <div
                    style={{
                        position: 'absolute',
                        width: dimension,
                        height: dimension,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div style={{fontFamily: 'OpenSansHebrewCondensedRegular'}}>
                        {
                            props.image.title
                        }
                    </div>

                </div>
            }
            {
                props.image.image != -1 &&
                <img style={imageStyle} src={props.image.image}/>
            }

        </button>


    )
}

export default ImageByType;
