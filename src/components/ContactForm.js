import React, {useEffect, useState} from 'react';
import instagram from '../res/icons/instagram.png';
import whatsApp from '../res/icons/whatsapp.png';
import facebook from '../res/icons/facebook.png'
import {useMediaQuery} from "react-responsive";
import {APP_COLOR, marginValue} from "../utils/Utils";
import strings from "../localization/localization";

const InputSection = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})

    const inputStyle = {
        boxSizing: 'border-box',
        fontFamily: 'Assistant',
        fontSize: '1em',
        borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
        paddingLeft: '2%',
        paddingRight:'2%',
        outlineWidth: 0,
        textAlign:!props.lang?'right':'left',
        height: isDesktopOrLaptop ? '5vmin' : '10vmin',
        color: '#575756',
        width: isDesktopOrLaptop ? undefined : '90vmin',
        borderColor: 'transparent',
        margin:isDesktopOrLaptop?'0.5vmin':'1.5vmin',
        marginRight:0,
        marginLeft:0,
    }

    return <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: isDesktopOrLaptop ? 'unset' : 'center',

    }}>

        <input
            type="text"
            onChange={(event) => {
                props.setFullName(event.target.value)
            }}
            value={props.fullName}
            style={inputStyle}
            placeholder={strings.fullName}/>
        <div style={{

        }}/>

        <input
            type="phone"
            onChange={(event) => {
                props.setPhone(event.target.value)
            }}
            value={props.phone}
            style={inputStyle}
            placeholder={strings.phone}/>
        <div style={{

        }}/>
        <input
            onChange={(event) => {
                props.setSubject(event.target.value)
            }}
            value={props.subject}
            style={inputStyle}
            placeholder={strings.title}/>

    </div>
}

const TextSend = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    return <div style={{
        width: isDesktopOrLaptop ? undefined : '90vmin',
        flex: 1,
        display: 'flex',
        alignSelf: isDesktopOrLaptop ? undefined : 'center',
        flexDirection: isDesktopOrLaptop ? undefined : 'column',
        marginBottom:isDesktopOrLaptop?0:'16.5vmin'


    }}>

        <textarea
            onChange={(event) => {
                props.setBody(event.target.value)
            }}
            value={props.body}
            style={{
                textAlign:!props.lang?'right':'left',
                margin:'0.5vmin',
                marginTop:isDesktopOrLaptop?'0.5vmin':'1.5vmin',
                marginLeft:isDesktopOrLaptop&&props.lang?"1vmin":0,
                marginRight:isDesktopOrLaptop&&!props.lang?"1vmin":0,
                paddingLeft: '2%',
                paddingRight:'2%',
                paddingTop: '2%',
                boxSizing: 'border-box',
                fontFamily: 'Assistant',
                width: '100%',
                outlineWidth: 0,
                fontSize: '1em',
                color: '#575756',
                resize: 'none',
                borderColor: 'transparent',
                borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',

                height: isDesktopOrLaptop ? undefined : '20vmin',

            }}
            placeholder={strings.message}/>
        <a
            onClick={()=>{
                const text=""+ props.subject + "&body=" + props.body + '%0d%0a' + " "+strings.phone + props.phone + '%0d%0a' + " "+strings.fullName + props.fullName
                const url=navigator.userAgent.includes("Mobile")?
                    'mailto:hagar.ifrah@gmail.com?'+text:
                    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hagar.ifrah94@gmail.com&su=" +text
                window.open(url)
            }}
            target="_blank"
            onMouseOver={() => {
                props.setHover(true)
            }
            }
            onMouseLeave={() => {
                props.setHover(false);
            }
            }
            style={{
                margin:'0.5vmin',
                marginLeft:isDesktopOrLaptop?"1vmin":'0.5vmin',
                marginRight:isDesktopOrLaptop?"1vmin":'0.5vmin',
                marginTop:isDesktopOrLaptop?'0.5vmin':'2vmin',
                color: 'transparent',
                borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
                padding: isDesktopOrLaptop ? '1%' : 0,
                borderColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                height: isDesktopOrLaptop ? undefined : '10vmin',
                backgroundColor: props.hover || !isDesktopOrLaptop ? '#E9A8A9' : '#a5a5a5',
            }}>
            <div style={{
                fontFamily: 'Assistant',
                color: 'white',
                borderColor: 'transparent',
                fontWeight: 'bold',
                fontSize: '1em',
                transform: isDesktopOrLaptop ? 'rotate(90deg)' : undefined,
            }}>
                {
                    strings.send
                }
            </div>
        </a>
    </div>
}
const ContactForm = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [hover, setHover] = useState(false);
    const [body, setBody] = useState("");


    return <div style={{
        display: 'flex',
        backgroundColor: APP_COLOR.MAIN_COLOR + "50",
        width: '100vw',
        flexDirection: isDesktopOrLaptop ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        paddingTop:marginValue,
        paddingBottom:marginValue,


    }}>
        <div style={{
            flexDirection: isDesktopOrLaptop ? 'row' : 'column',
            justifyContent: 'space-between',

            display: 'flex',
            width: '51.5vw',
            height:'100%',

        }}>



            <InputSection
                lang={props.lang}
                phone={phone}
                fullName={fullName}
                subject={subject}
                setPhone={(phone) => {
                    setPhone(phone)
                }}
                setFullName={(fullName) => {
                    setFullName(fullName)
                }}
                setSubject={(subject) => {
                    setSubject(subject)
                }}/>
            <TextSend
                lang={props.lang}
                fullName={fullName}
                phone={phone}
                subject={subject}
                body={body}
                setBody={(body) => {
                    setBody(body)
                }}
                setHover={(hover) => {
                    setHover(hover)
                }}
                hover={hover}

            />
        </div>


    </div>
}


export default ContactForm;
