import React, {useState} from 'react';
import instagram from '../res/icons/instagram.png';
import whatsApp from '../res/icons/whatsapp.png';
import facebook from '../res/icons/facebook.png'
import {useMediaQuery} from "react-responsive";
import {APP_COLOR} from "../utils/Utils";

const ContactForm = () => {
    const isDesktopOrLaptop = useMediaQuery({minDeviceWidth: 1224})
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [hover, setHover] = useState(false);
    const [body, setBody] = useState("");
    const InputSection = () => {

        const inputStyle = {
            boxSizing: 'border-box',
            fontFamily: 'Assistant',
            fontSize: '1em',
            color: '#575756',
            borderRadius:isDesktopOrLaptop? '0.5vw':'1vh',
            paddingRight:'2%',
            outlineWidth: 0,
            height: isDesktopOrLaptop ? '3.5vh' : '4.5vh',
            width: isDesktopOrLaptop ? '53%' : '80%',
            borderColor: 'transparent',


        }

        return <div style={{

            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: isDesktopOrLaptop ? 'flex-end' : 'center',
            flexDirection: 'column',
            width: '100%',
            height: isDesktopOrLaptop ? 'unset' : '25vh'
        }}>
            <input
                onChange={(event) => {
                    setFullName(event.target.value)
                }}
                style={inputStyle}
                placeholder={"שם מלא"}/>

            <input
                onChange={(event) => {
                    setPhone(event.target.value)
                }}
                style={inputStyle}
                placeholder={"טלפון"}/>

            <input
                onChange={(event) => {
                    setSubject(event.target.value)
                }}
                style={inputStyle}
                placeholder={"נושא"}/>

        </div>
    }


    const TextSend = () => {

        return <div style={{justifyContent: isDesktopOrLaptop ? 'unset' : 'center', display: 'flex',  width: isDesktopOrLaptop ? '55%' : '100%',}}>
        <textarea
            onChange={(event) => {
                setBody(event.target.value)
            }}
            style={{
                paddingRight:'2%',
                boxSizing: 'border-box',
                fontFamily: 'Assistant',
                width: isDesktopOrLaptop ?'100%':'70%',
                outlineWidth: 0,
                fontSize: '1em',
                color: '#575756',
                '-webkit-input-placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
                    color: 'red',
                },
                resize: 'none',
                borderColor: 'transparent',
                borderRadius:isDesktopOrLaptop? '0.5vw':'1vh',
                margin: '1.7vh',
                marginRight: isDesktopOrLaptop ? "1.7vh" : 0,


                marginTop: isDesktopOrLaptop ? '1.7vh' : 0,

            }} placeholder={"תוכן הודעה"}/>
            <a
                target="_blank"
                href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hagar.ifrah94@gmail.com&su=" + subject + "&body=" + body + '%0d%0a' + "מספר טלפון: " + phone + '%0d%0a' + "שם מלא: " + fullName}
                onMouseOver={() => {
                    setHover(true)
                }
                }
                onMouseLeave={() => {
                    setHover(false);
                }
                }
                style={{
                    color: 'transparent',
                    borderRadius:isDesktopOrLaptop? '0.5vw':'1vh',
                    padding:'1%',
                    borderColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    margin:isDesktopOrLaptop ? '1.7vh':0,
                    marginRight: 0,
                    marginBottom:'1.7vh',

                    backgroundColor: hover ? '#E9A8A9' : '#a5a5a5',
                }}>
                <div style={{
                    fontFamily: 'Assistant',
                    color: 'white',
                    borderColor: 'transparent',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    transform: 'rotate(90deg)',
                }}>
                    שלח
                </div>
            </a>
        </div>
    }

    return <div style={{
        display: 'flex',
        backgroundColor: APP_COLOR.MAIN_COLOR + "50",
        width: '100vw',
        flexDirection: isDesktopOrLaptop ? 'row' : 'column',
        justifyContent: isDesktopOrLaptop ? 'unset' : 'center',
        marginTop: '5vh',
    }}>
        <div style={{display: 'flex', flex: 1, height: '18vh'}}>
            <InputSection />
        </div>
        <div style={{display: 'flex', flex: 1,}}>
            <TextSend/>
        </div>

    </div>
}


export default ContactForm;
