import React, {useState} from 'react';
import myGoal3 from '../res/category/my_goal/my_goal3.jpg'
import {APP_COLOR, TYPE_OF_IMAGE} from "../utils/Utils";
import '../css/effects.css'
import {useMediaQuery} from "react-responsive";

const Test = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const [hover, setHover] = useState(false);
    const [firstClick, setFirstClick] = useState(true);
    const dimension = isDesktopOrLaptop ? '13vw' : '95vw';
    const mainImage = props.item.mainImage;
    const id = props.item.id;
    const type = props.item.type;
    const title = props.item.title
    const imageDivStyle = {
        borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
        cursor: mainImage != -1 ? 'pointer' : undefined,
        height: isDesktopOrLaptop ? dimension : mainImage == -1 ? 0 : dimension,
        outline: 'none',
        marginBottom: isDesktopOrLaptop ? 0 : '3vmin',
        width: dimension,

        borderColor: 'transparent',
        overflow: 'hidden',

        maxHeight: dimension,
        maxWidth: dimension,
        margin: '1vmin'
    }

    let filter = undefined;
    if ( isDesktopOrLaptop) {
        if (type === TYPE_OF_IMAGE.FILTERED &&!hover) {
            filter = 'grayscale(100%)';
        }else if(type === TYPE_OF_IMAGE.HOVER &&hover){
            filter = 'grayscale(100%)';
        }
    }
    const onMouseEnter = () => {
        if (mainImage != -1) {
            setHover(true)
        }
    }
    const onBlur = () => {

        setHover(false);
        setFirstClick(true)
    }
    const onMouseOut = () => {
        setHover(false)
    }
    const onClick = () => {
        if (!navigator.userAgent.includes("Mobile") || type == TYPE_OF_IMAGE.FILTERED) {
            if (props.onClick != undefined && mainImage != -1) {
                props.onClick(id);
            }
        } else {
            if (firstClick) {
                setFirstClick(false)
                setHover(true)
            } else {
                if (props.onClick != undefined) {
                    props.onClick(id);
                }
            }
        }
    }
    return <div
        onBlur={onBlur}
        onFocus={()=>{
            console.log("fasfsasffasfasfasafsafs")
        }}
        onClick={onClick}
        id="yourdivid"
        tabindex="0"
        onMouseLeave={onMouseOut}
        onMouseEnter={onMouseEnter}
        style={imageDivStyle}>
        {
            type === TYPE_OF_IMAGE.HOVER && hover &&
            <div

                className={"hover"}
                style={{
                    borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
                    zIndex: 100,
                    position: 'absolute',
                    width: dimension,
                    height: dimension
                }}>

            </div>
        }
        {
            type === TYPE_OF_IMAGE.HOVER && hover &&
            <div
                className={"showTextAfterHover"}
                style={{
                    borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    fontSize: '2rem',
                    alignItems: 'center',
                    display: 'flex',
                    color:'white',
                    justifyContent: 'center',
                    zIndex: 200,
                    position: 'absolute',
                    width: dimension,
                    height: dimension
                }}>
                {
                    title
                }
            </div>
        }


        {
            mainImage != -1 && (type === TYPE_OF_IMAGE.FILTERED || type === TYPE_OF_IMAGE.HOVER) &&
            <img

                src={mainImage}
                 className={
                     type === TYPE_OF_IMAGE.HOVER && hover ? 'imageRotate':
                         type === TYPE_OF_IMAGE.HOVER && !hover?'unImageRotate':
                             undefined}
                 style={{
                     filter,
                     objectFit: 'cover',
                     height: dimension,
                     width: dimension
                 }}>

            </img>
        }


    </div>
}

export default Test;
