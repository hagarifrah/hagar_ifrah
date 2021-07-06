import React, {useEffect, useState} from 'react';
import {APP_COLOR, TYPE_OF_IMAGE} from "../utils/Utils";
import '../index.css'
import {useMediaQuery} from "react-responsive";

const ImageByType = (props) => {

    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const [hover, setHover] = useState(false);
    const [firstClick,setFirstClick]=useState(true);
    const dimension = isDesktopOrLaptop ? '25vh' : '85vw';
    const mainImage=props.item.mainImage;
    const type=props.item.type;
    const id=props.item.id;
    const title=props.item.title
    const imageDivStyle = {
        cursor: mainImage != -1 ? 'pointer' : undefined,
        height:isDesktopOrLaptop? dimension:mainImage == -1?0:dimension,
        marginLeft: '1vh',
        marginRight: '1vh',
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
    const onMouseOut = () => {
        setHover(false)
    }
    const onClick=()=>{
        if(!navigator.userAgent.includes("Mobile")||type == TYPE_OF_IMAGE.FILTERED){
            if(props.onClick!=undefined){
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
            onClick={onClick}
            onMouseLeave={onMouseOut}
            onMouseEnter={onMouseEnter}
            style={imageDivStyle}>


            {
                mainImage != -1 && (type === TYPE_OF_IMAGE.FILTERED || type === TYPE_OF_IMAGE.HOVER && !hover) &&
                <img

                    style={{
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
