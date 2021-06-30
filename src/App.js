import React, {useState} from 'react';
import cosmetic_logo from './res/category/cosmetic/cosmetic_logo.png'
import landLogo from './res/category/land_car/land_logo.png'
import lifeBoatLogo from './res/category/save_boat/life_boat_logo.png'
import betterFlyLogo from './res/category/better_fly/better_fly_logo.png'
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Row from "./components/Row";
import {APP_COLOR, TYPE_OF_IMAGE} from "./utils/Utils";
import logo from './res/logo.png'
import {useMediaQuery} from "react-responsive";

const App = (props) => {


    const images = {
        firstRow: [{
            key: 0,
            index: 0,
            image: cosmetic_logo,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 1,
            index: 1,
            image: landLogo,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 2,
            index: 2,
            image: lifeBoatLogo,
            type: TYPE_OF_IMAGE.FILTERED,
            title: 'My Title'
        }, {
            key: 3,
            index: 3,
            image: betterFlyLogo,
            type: TYPE_OF_IMAGE.FILTERED
        }]
    }
    const Brand = () => {
        const [showSetMore,setMore]=useState(false);
        return <div style={{
            marginBottom: '5%',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%'
        }}>
            <div style={{
                fontFamily: 'OpenSansHebrewCondensedRegular',
                fontSize: '2rem',
                color: APP_COLOR.MAIN_COLOR
            }}>
                מיתוג

            </div>

            <Row images={images.firstRow}/>
            {
                showSetMore&&
                <>
                    <Row images={images.firstRow}/>
                    <Row images={images.firstRow}/>
                    <Row images={images.firstRow}/>
                </>
            }
            <MoreWork action={()=>{setMore(!showSetMore)}}/>
        </div>
    }
    const MoreWork=(action)=>{
        const isDesktopOrLaptop = useMediaQuery({minDeviceWidth: 1224})
        return <button
            onClick={action}
            style={{
                marginTop: isDesktopOrLaptop ? '2%' : '5%',
                marginBottom: isDesktopOrLaptop ? '15%' : 0,
                cursor: 'pointer',
                borderWidth: 0,
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <BiDotsHorizontalRounded color={"#E9A8A9"} size={'3.5vh'}/>
        </button>
    }

    return (


        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            justifyContent: 'space-evenly',
        }}>
            <Header/>
            <Brand/>
        </div>


    );
}
const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({minDeviceWidth: 1224})
    return (
        <div style={{

            marginTop: '5vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <div style={{height: isDesktopOrLaptop ? '20vh' : '50vw',}}>
                <img style={{height: '100%'}} src={logo}/>
            </div>

            <div style={{
                marginTop: '5%',
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderStyle: 'solid',
                borderColor: 'black',
                borderBottomWidth: '1px',
                borderTopWidth: '1px',
                padding: '3%',
                width: isDesktopOrLaptop ? '50vw' : '85vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    fontSize: isDesktopOrLaptop ? '1.5rem' : '1.2rem',
                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    color: APP_COLOR.TEXT_COLOR,
                    textAlign: 'center'
                }}>
                    היי שמי הגר ואני מעצבת גרפית.<br/>
                    אז קצת עלי, אני פרפקציוניסטית, תחרותית ותמיד שואפת ללמוד דברים חדשים.

                    אני מאוד אוהבת את העיצוב המנימליסטי והנקי ושמה דגש גם על הפרטים הקטנים ביותר.
                    <br/>
                    <br/>
                    תוכלו להציץ בתיק העבודות שלי ואם אהבתם והתחברתם צרו איתי קשר ואשמח לקדם את העסק שלכם ע"י מיתוג
                    ייחודי ועכשווי שיבדיל אתכם מהמתחרים.
                </div>
            </div>
        </div>
    )
};
export default App;
