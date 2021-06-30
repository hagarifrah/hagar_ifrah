import React, {useState} from 'react';
import cosmetic_logo from './res/category/cosmetic/cosmetic_logo.png'
import landLogo from './res/category/land_car/land_logo.png'
import lifeBoatLogo from './res/category/save_boat/life_boat_logo.png'
import betterFlyLogo from './res/category/better_fly/better_fly_logo.png'
import pizzaLogo from './res/category/pizza/pizza_logo.png'
import alian_logo from './res/category/alian/alian_logo.png'
import tourLogo from './res/category/tour/tour_logo.jpg'
import bibiLogo from './res/category/bibi/bibi_logo.jpg'
import weddingLogo from './res/category/events/wedding_logo.jpg'
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
        },],
        secondRow:[{
            key: 0,
            index: 0,
            image: pizzaLogo,
            type: TYPE_OF_IMAGE.FILTERED
        },{
            key: 1,
            index: 1,
            image: alian_logo,
            type: TYPE_OF_IMAGE.FILTERED
        },{
            key: 0,
            index: 0,
            image: -1,
            type: TYPE_OF_IMAGE.FILTERED
        },{
            key: 0,
            index: 0,
            image: -1,
            type: TYPE_OF_IMAGE.FILTERED
        }],
        moreDesign:[{
            key: 0,
            index: 0,
            image: weddingLogo,
            type: TYPE_OF_IMAGE.HOVER
        },{
            key: 1,
            index: 1,
            image: tourLogo,
            type: TYPE_OF_IMAGE.HOVER
        },{
            key: 2,
            index: 2,
            image: bibiLogo,
            type: TYPE_OF_IMAGE.HOVER
        },{
            key: 3,
            index: 3,
            image: -1,
            type: TYPE_OF_IMAGE.HOVER
        }]
    }
    const ShowWork = (props) => {
        const [showSetMore, setMore] = useState(false);
        return <div style={{

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
                {props.title}
            </div>

            <Row images={props.row}/>
            {
                showSetMore &&
                <>
                    <Row images={props.moreArray[0]}/>

                </>
            }
            {
                props.moreArray.length>0&&
                <MoreWork action={() => {
                    setMore(!showSetMore)
                }}/>
            }

        </div>
    }
    const MoreWork = (props) => {
        const isDesktopOrLaptop = useMediaQuery({minDeviceWidth: 1224})
        return <button
            onClick={props.action}
            style={{
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
            <ShowWork title={"מיתוג"} moreArray={[images.secondRow]} row={images.firstRow}/>
            <ShowWork title={"עיצובים נוספים"} moreArray={[]} row={images.moreDesign}/>
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
