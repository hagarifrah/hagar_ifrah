import React,{useState} from 'react';
import instagram from '../res/icons/instagram.png';
import whatsApp from '../res/icons/whatsapp.png';
import facebook from '../res/icons/facebook.png'
const ContactForm = () => {
    const [hover, setHover] = useState(false);
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [body, setBody] = useState("");
    const [fullName, setFullName] = useState("");
    return <div style={{
        paddingTop: '1%',
        flexDirection: 'column',
        display: 'flex',
        width:'100vw'
    }}>

        <div style={{
            backgroundColor: '#E9A8A950',
            display: 'flex',
            flex: 1,
            paddingTop: '1%',
            paddingBottom: '1%',


            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <div style={{

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '25.10vw',
                height: '10rem',
                marginLeft: '0.15%',
            }}>
                <input
                    onChange={(event) => {
                        setFullName(event.target.value)
                    }}
                    style={{
                        boxSizing: 'border-box',
                        paddingRight: '2%',
                        margin: '1.5%',
                        fontFamily: 'Assistant',
                        fontSize: '1em',
                        color: '#575756',
                        borderRadius: '0.5vw',
                        outlineWidth: 0,
                        width: '100%',
                        borderColor: 'transparent',
                        height: '100%',
                    }}
                    placeholder={"שם מלא"}/>

                <input
                    onChange={(event) => {
                        setPhone(event.target.value)
                    }}
                    style={{
                        boxSizing: 'border-box',
                        paddingRight: '2%',
                        margin: '1.5%',
                        fontFamily: 'Assistant',
                        borderRadius: '0.5vw',
                        outlineWidth: 0,
                        fontSize: '1em',
                        color: '#575756',
                        width: '100%',
                        borderColor: 'transparent',
                        height: '100%',
                    }}
                    placeholder={"טלפון"}/>

                <input
                    onChange={(event) => {
                        setSubject(event.target.value)
                    }}
                    style={{
                        boxSizing: 'border-box',
                        paddingRight: '2%',
                        margin: '1.5%',
                        fontFamily: 'Assistant',
                        borderRadius: '0.5vw',
                        fontSize: '1em',
                        color: '#575756',
                        outlineWidth: 0,
                        width: '100%',
                        borderColor: 'transparent',
                        height: '100%',
                    }}
                    placeholder={"נושא"}/>
            </div>
            <textarea
                onChange={(event) => {
                    setBody(event.target.value)
                }}
                style={{
                    boxSizing: 'border-box',
                    paddingTop: '0.4%',
                    paddingRight: '0.6%',
                    fontFamily: 'Assistant',
                    outlineWidth: 0,
                    fontSize: '1em',
                    color: '#575756',
                    '-webkit-input-placeholder': { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        color: 'red',
                    },
                    resize: 'none',
                    borderColor: 'transparent',
                    marginRight: '0.52%',
                    width: '25.10vw',
                    borderRadius: '0.5vw',
                    height: '9rem'
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
                    borderRadius: '0.5vw',
                    width: '2.5rem',
                    borderColor: 'transparent',
                    marginRight: '0.7%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    height: '9rem',
                    backgroundColor: hover ? '#E9A8A9' : '#a5a5a5',
                }}>
                <div style={{
                    fontFamily: 'Assistant',
                    color: 'white',
                    borderColor: 'transparent',
                    fontWeight: 'bold',

                    transform: 'rotate(90deg)',
                }}>
                    שלח
                </div>
            </a>


        </div>
        <div style={{
            marginTop: '2%',
            marginBottom: '2%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        }}>

            <a
                target="_blank"
                style={{
                    marginLeft: '2%', height: '4vh'
                }}
                href={"https://www.instagram.com/hagarifrah/"}>
                <img
                    style={{height: '70%'}}
                    src={instagram}/>
            </a>
            <a
                target="_blank"
                style={{
                    marginLeft: '2%', height: '4vh'
                }}
                href={"https://www.facebook.com/hagar.ifrah"}>
                <img
                    style={{height: '70%'}}
                    src={facebook}/>
            </a>


            <a
                target="_blank"
                style={{
                    marginLeft: '2%', height: '4vh'
                }}
                href={"https://wa.me/0523080322?text=היי הגר"}>
                <img
                    style={{height: '70%'}}
                    src={whatsApp}/>
            </a>

        </div>
    </div>
}

export default ContactForm;
