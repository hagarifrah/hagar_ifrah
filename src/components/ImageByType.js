import React, {useEffect, useState} from 'react';
import {APP_COLOR, TYPE_OF_IMAGE} from "../utils/Utils";
import '../index.css'
import {useMediaQuery} from "react-responsive";
const ImageByType = (props) => {

    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
    const [hover, setHover] = useState(false);
    const classes = hover ? 'image' : 'image hide'
    const dimension=isDesktopOrLaptop?'25vh':'65vw';
    const imageDivStyle = {
        height:dimension,
        width: dimension,
        marginLeft: '0.5vw',
        marginRight: '0.5vw',
        backgroundColor: hover && props.image.type === TYPE_OF_IMAGE.HOVER ? APP_COLOR.MAIN_COLOR : undefined,
    }
    const imageStyle = {
        filter: hover && props.image.type === TYPE_OF_IMAGE.FILTERED ?  undefined: isDesktopOrLaptop?'grayscale(100%)':undefined,
        height: hover && props.image.type === TYPE_OF_IMAGE.HOVER ? 0 : '100%',
    }
    const onMouseEnter = () => {
        setHover(true)
    }
    const onMouseOut = () => {
        setHover(false)
    }

    return (

        <div  onMouseLeave={onMouseOut} onMouseEnter={onMouseEnter} style={imageDivStyle}>
            {
                props.image.type === TYPE_OF_IMAGE.HOVER &&hover&&
                <div   style={{
                    position: 'absolute',
                    width: dimension,
                    height:dimension,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',

                }}>
                    <div style={{fontFamily:'OpenSansHebrewCondensedRegular'}}>
                        {
                            props.image.title
                        }
                    </div>

                </div>
            }
            <img   style={imageStyle} src={props.image.image}/>
        </div>


    )
}

export default ImageByType;
