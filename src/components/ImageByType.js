import React, {useEffect, useState} from 'react';
import {APP_COLOR, TYPE_OF_IMAGE} from "../utils/Utils";
import '../index.css'
import {useMediaQuery} from "react-responsive";

const ImageByType = (props) => {

    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const [hover, setHover] = useState(false);
    const [firstClick,setFirstClick]=useState(true);
    const dimension = isDesktopOrLaptop ? '13vw' : '95vw';
    const mainImage=props.item.mainImage;
    const type=props.item.type;
    const id=props.item.id;
    const title=props.item.title
    const imageDivStyle = {
        cursor: mainImage != -1 ? 'pointer' : undefined,
        height:isDesktopOrLaptop? dimension:mainImage == -1?0:dimension,
        outline: 'none',
        marginBottom:isDesktopOrLaptop?0:'3vmin',
        width: dimension,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    }
    let filter = undefined;
    if (type === TYPE_OF_IMAGE.FILTERED && isDesktopOrLaptop) {
        if (!hover) {
            filter = 'grayscale(100%)';
        }
    }

    const onMouseEnter = () => {
        if (mainImage != -1) {
            setHover(true)
        }
    }
    const onBlur=()=>{
        setHover(false);
        setFirstClick(true)
    }
    const onMouseOut = () => {
        setHover(false)
    }
    const onClick=()=>{
        if(!navigator.userAgent.includes("Mobile")||type == TYPE_OF_IMAGE.FILTERED){
            if(props.onClick!=undefined&&mainImage!=-1){
                props.onClick(id);
            }
        }else{
            if(firstClick){
                setFirstClick(false)
                setHover(true)
            }

            else{
                if(props.onClick!=undefined){
                    props.onClick(id);
                }
            }
        }
    }



    return (

        <button
            onBlur={onBlur}
            onClick={onClick}
            onMouseLeave={onMouseOut}
            onMouseEnter={onMouseEnter}
            style={imageDivStyle}>


            {
                mainImage != -1 && (type === TYPE_OF_IMAGE.FILTERED || type === TYPE_OF_IMAGE.HOVER && !hover) &&
                <img

                    style={{
                        borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
                        userSelect:'none',
                        outline: 'none',
                        filter,
                        height: '100%',
                        width: '100%',
                        textIndent: -10000
                    }}


                    src={mainImage}/>
            }

            {
                hover && type === TYPE_OF_IMAGE.HOVER &&
                <div style={{
                    borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
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
                        title
                    }
                </div>
            }

        </button>


    )
};

export default ImageByType;
