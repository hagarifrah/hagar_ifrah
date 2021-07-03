import React, {useEffect, useState} from 'react';
import instagram from '../res/icons/instagram.png';
import whatsApp from '../res/icons/whatsapp.png';
import facebook from '../res/icons/facebook.png'
import {useMediaQuery} from "react-responsive";
import {APP_COLOR} from "../utils/Utils";

const InputSection = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})

    const inputStyle = {
        boxSizing: 'border-box',
        fontFamily: 'Assistant',
        fontSize:isDesktopOrLaptop?'1em':'1.5em',

        borderRadius:isDesktopOrLaptop? '0.5vw':'1vh',
        paddingRight:'2%',
        outlineWidth: 0,
        height:isDesktopOrLaptop?'5vmin':'10vmin',
        color: '#575756',
        width:isDesktopOrLaptop?undefined:'80vmin',


        borderColor: 'transparent',
    }

    return <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems:isDesktopOrLaptop?'unset':'center',
        margin: '1.7vh',
        marginLeft: 0,
        marginRight: 0,


    }}>

        <input
            type="text"
            onChange={(event) => {
                props.setFullName(event.target.value)
            }}
            value={props.fullName}
            style={inputStyle}
            placeholder={"שם מלא"}/>
        <div style={{
            marginTop: '5%',
        }}/>

        <input
            type="phone"
            onChange={(event) => {
                props.setPhone(event.target.value)
            }}
            value={props.phone}
            style={inputStyle}
            placeholder={"טלפון"}/>
        <div style={{
            marginTop: '5%',
        }}/>
        <input
            onChange={(event) => {
                props.setSubject(event.target.value)
            }}
            value={props.subject}
            style={inputStyle}
            placeholder={"נושא"}/>

    </div>
}

const TextSend = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    return <div style={{

        width:isDesktopOrLaptop?undefined:'80vmin',
        flex: 1,
        display: 'flex',
        alignSelf:isDesktopOrLaptop?undefined:'center',

    }}>

        <textarea
            onChange={(event) => {
                props.setBody(event.target.value)
            }}
            value={props.body}
            style={{
                paddingRight: '2%',
                paddingTop:!isDesktopOrLaptop?'2%':0,
                boxSizing: 'border-box',
                fontFamily: 'Assistant',
                width: '100%',
                outlineWidth: 0,
                fontSize:isDesktopOrLaptop?'1em':'1.5em',
                color: '#575756',
                resize: 'none',
                borderColor: 'transparent',
                borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
                margin: '1.7vh',
                marginRight: isDesktopOrLaptop ? "1.7vh":0,
                height:isDesktopOrLaptop ?undefined:'10vmin',
                marginTop:isDesktopOrLaptop ?'1.7vh':0 ,
            }}
            placeholder={"תוכן הודעה"}/>
        <a
            target="_blank"
            href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hagar.ifrah94@gmail.com&su=" + props.subject + "&body=" +props.body + '%0d%0a' + "מספר טלפון: " +props.phone + '%0d%0a' + "שם מלא: " +props.fullName}
            onMouseOver={() => {
                props.setHover(true)
            }
            }
            onMouseLeave={() => {
                props.setHover(false);
            }
            }
            style={{
                color: 'transparent',
                borderRadius: isDesktopOrLaptop ? '0.5vw' : '1vh',
                padding: '2%',
                borderColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                margin:'1.7vh',
                width:isDesktopOrLaptop?undefined:'10vmin',

                marginRight: 0,
                marginLeft: 0,
                marginBottom: isDesktopOrLaptop?'1.7vh':0,
                marginTop: isDesktopOrLaptop?'1.7vh':0,
                paddingBottom:isDesktopOrLaptop?'2%':0,
                paddingTop:isDesktopOrLaptop?'2%':0,
                height:isDesktopOrLaptop?undefined:'10vmin',


                backgroundColor: props.hover ? '#E9A8A9' : '#a5a5a5',
            }}>
            <div style={{
                fontFamily: 'Assistant',
                color: 'white',
                borderColor: 'transparent',
                fontWeight: 'bold',
                fontSize:isDesktopOrLaptop?'0.8em':'1.5em',
                transform: isDesktopOrLaptop?'rotate(90deg)':undefined,
            }}>
                שלח
            </div>
        </a>
    </div>
}
const ContactForm = () => {
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
        marginTop: '5vh',
        paddingTop:'2.5vmin',
        paddingBottom:'2.5vmin',
    }}>
        <div style={{
            flexDirection: isDesktopOrLaptop ? 'row' : 'column',
            justifyContent: 'space-between',
            display: 'flex',
            width: '105vmin',

        }}>
            <InputSection
                phone={phone}
                fullName={fullName}
                subject={subject}
                setPhone={(phone)=>{setPhone(phone)}}
                setFullName={(fullName)=>{setFullName(fullName)}}
                setSubject={(subject)=>{setSubject(subject)}}/>
            {
                !isDesktopOrLaptop&&
                <div style={{
                    marginTop: '2.5%',
                }}/>
            }
            <TextSend
                fullName={fullName}
                phone={phone}
                subject={subject}
                body={body}
                setBody={(body)=>{setBody(body)}}
                setHover={(hover)=>{setHover(hover)}}
                hover={hover}

            />
        </div>


    </div>
}


export default ContactForm;
