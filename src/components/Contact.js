import instagram from "../res/icons/instagram.png";
import facebook from "../res/icons/facebook.png";
import whatsApp from "../res/icons/whatsapp.png";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {marginValue} from "../utils/Utils";

const Contact = () => {

    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const dimension=isDesktopOrLaptop?"3vmin":'5.2vmin';
    const divStyle={

        marginLeft:isDesktopOrLaptop?'5vmin':0,
        display:'flex'
    }
    return <div style={{
        position:isDesktopOrLaptop?'relative':'fixed',
        bottom:0,
        boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
        backgroundColor:'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent:isDesktopOrLaptop? 'center':'space-evenly',
        zIndex:500,
        height:dimension,
        padding:marginValue,
        paddingRight:0,
        paddingLeft:0,

        width:'100%',
        flexDirection: 'row',
    }}>

        <div style={divStyle}>
                <img
                    onClick={()=>{
                        window.open(!navigator.userAgent.includes("Mobile")?"https://www.facebook.com/hagar.ifrah":'fb://profile/100007881699145');
                    }}
                    style={{userSelect:'none',display:"flex",height:dimension}}
                    src={facebook}/>
        </div>
        <div style={divStyle}>
            <img
                onClick={()=>{
                    window.open(!navigator.userAgent.includes("Mobile")?"https://wa.me/0523080322?text=היי הגר":'whatsapp://send?phone=+9720523080322&text=היי הגר ');
                }}
                style={{userSelect:'none',display:"flex",height:dimension}}
                src={whatsApp}/>
        </div>
        <div style={divStyle}>
            <img
                onClick={()=>{
                    window.open(!navigator.userAgent.includes("Mobile")?"https://www.instagram.com/hagarifrah/":'instagram://user?username=hagarifrah');
                }}
                style={{userSelect:'none',display:"flex",height:dimension}}
                src={instagram}/>
        </div>
       {/* <div>
        <a
            target="_blank"
            style={navStyle}
            href={!navigator.userAgent.includes("Mobile")?"https://www.facebook.com/hagar.ifrah":'fb://profile/100007881699145'}>
            <img
                    style={{display:"flex",flex:1,}}
                src={facebook}/>
        </a>
        </div>



        <div>
        <a
            target="_blank"
            style={navStyle}
            href={!navigator.userAgent.includes("Mobile")?"https://wa.me/0523080322?text=היי הגר":'whatsapp://send?phone=+9720523080322&text=היי הגר '}>
            <img
                    style={{display:"flex",flex:1,}}
                src={whatsApp}/>
        </a>
        </div>*/}


    </div>
}

export default Contact;
