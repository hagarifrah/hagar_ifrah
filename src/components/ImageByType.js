import React, {useEffect, useState} from 'react';
import {APP_COLOR, TYPE_OF_IMAGE} from "../utils/Utils";
import '../index.css'
import {useMediaQuery} from "react-responsive";

const ImageByType = (props) => {

    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const [hover, setHover] = useState(false);
    const dimension = isDesktopOrLaptop ? '25vh' : '85vw';
    const imageDivStyle = {
        cursor: props.image.image != -1 ? 'pointer' : undefined,
        height:isDesktopOrLaptop? dimension:props.image.image == -1?0:dimension,
        marginLeft: '1vh',
        marginRight: '1vh',
        width: dimension,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    }
    let filter = undefined;
    if (props.image.type === TYPE_OF_IMAGE.FILTERED && isDesktopOrLaptop) {
        if (!hover) {
            filter = 'grayscale(100%)';
        }
    }

    const onMouseEnter = () => {
        if (props.image.image != -1) {
            setHover(true)
        }
    }
    const onMouseOut = () => {
        setHover(false)
    }
    const onClick=()=>{
        if(props.onClick!=undefined){
            props.onClick(props.image.index);
        }

    }

    return (

        <button
            onClick={onClick}
            onMouseLeave={onMouseOut}
            onMouseEnter={onMouseEnter}
            style={imageDivStyle}>

            {/* {
                hover && props.image.type === TYPE_OF_IMAGE.HOVER ?
                    <div style={{height:'100%',width:'100%'}}>
                        {
                            props.image.outerTitle
                        }
                    </div> :
                    props.image.image != -1 &&
                    <img style={{backgroundColor:'red',filter, height: '100%', width: '100%'}} src={props.image.image}/>
            }
*/}
            {
                props.image.image != -1 && (props.image.type === TYPE_OF_IMAGE.FILTERED || props.image.type === TYPE_OF_IMAGE.HOVER && !hover) &&
                <img

                    style={{
                        filter,
                        height: '100%',
                        width: '100%',
                        textIndent: -10000
                    }}


                    src={props.image.image}/>
            }

            {
                hover && props.image.type === TYPE_OF_IMAGE.HOVER &&
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    backgroundColor:APP_COLOR.MAIN_COLOR,
                    fontSize:'2rem'
                }}>
                    {
                        props.image.outerTitle
                    }
                </div>
            }

        </button>


    )
};

export default ImageByType;
