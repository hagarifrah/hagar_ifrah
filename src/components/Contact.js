import instagram from "../res/icons/instagram.png";
import facebook from "../res/icons/facebook.png";
import whatsApp from "../res/icons/whatsapp.png";
import React from "react";
import {useMediaQuery} from "react-responsive";

const Contact = () => {

    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const navStyle={

        marginLeft:isDesktopOrLaptop? '2%':0, height:isDesktopOrLaptop? '4vh':'5vh'
    }
    return <div style={{
        marginTop: isDesktopOrLaptop?"2%":'4%',
        marginBottom: isDesktopOrLaptop?"2%":'4%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:isDesktopOrLaptop? 'center':'space-evenly',
        flex:1,
        width:'100%',
        flexDirection: 'row',
    }}>

        <a
            target="_blank"
            style={navStyle}
            href={!navigator.userAgent.includes("Mobile")?"https://www.instagram.com/hagarifrah/":'instagram://user?username=hagarifrah'}>
            <img
                style={{height: '70%'}}
                src={instagram}/>
        </a>
        <a
            target="_blank"
            style={navStyle}
            href={!navigator.userAgent.includes("Mobile")?"https://www.facebook.com/hagar.ifrah":'fb://profile/100007881699145'}>
            <img
                style={{height: '70%'}}
                src={facebook}/>
        </a>


        <a
            target="_blank"
            style={navStyle}
            href={!navigator.userAgent.includes("Mobile")?"https://wa.me/0523080322?text=היי הגר":'whatsapp://send?phone=+9720523080322&text=היי הגר '}>
            <img
                style={{height: '70%'}}
                src={whatsApp}/>
        </a>

    </div>
}

export default Contact;