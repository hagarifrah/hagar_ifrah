import React, {useEffect, useState} from 'react';
import cosmetic_logo from './res/category/cosmetic/cosmetic_logo.png'
import landLogo from './res/category/land_car/land_logo.png'
import lifeBoatLogo from './res/category/save_boat/life_boat_logo.png'
import betterFlyLogo from './res/category/better_fly/better_fly_logo.png'
import pizzaLogo from './res/category/pizza/pizza_logo.png'
import alian_logo from './res/category/alian/alian_logo.png'
import tourLogo from './res/category/tour/tour_logo.jpg'
import bibiLogo from './res/category/bibi/bibi_logo.jpg'
import weddingLogo from './res/category/events/wedding_logo.jpg'
import photoshop1 from './res/category/photo_shop/photoshop1.jpg'
import photoshop2 from './res/category/photo_shop/photoshop2.jpg'
import photoshop3 from './res/category/photo_shop/photoshop3.jpg'
import photoshop4 from './res/category/photo_shop/photoshop4.jpg'
import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Row from "./components/Row";
import {FiX} from "react-icons/fi"
import {APP_COLOR, TYPE_OF_IMAGE} from "./utils/Utils";
import logo from './res/logo.png'
import {useMediaQuery} from "react-responsive";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import cosmetic1 from './res/category/cosmetic/cosmetic1.jpg'
import cosmetic2 from './res/category/cosmetic/cosmetic2.jpg'
import cosmetic3 from './res/category/cosmetic/cosmetic3.jpg'
import cosmetic4 from './res/category/cosmetic/cosmetic4.jpg'
import ImageByType from "./components/ImageByType";
import ImageOnFullScreen from "./components/ImageOnFullScreen";

const App = (props) => {

    const [yPosition, setYPosition] = useState(0);
    const [imagesArrayOnFullScreen, setImagesArrayOnFullScreen] = useState([]);
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(()=>{
        setShowFullScreen(true)
    },[imagesArrayOnFullScreen])
    const images = {
        firstRow: [{
            key: 0,
            index: 0,
            imagesOnFullScreen: [
                {image: cosmetic1, pressAble: true},
                {image: cosmetic2, pressAble: false},
                {image: cosmetic3, pressAble: true},
                {image: cosmetic4, pressAble: false},
            ],
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
        secondRow: [{
            key: 4,
            index: 4,
            image: pizzaLogo,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 5,
            index: 5,
            image: alian_logo,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 6,
            index: 6,
            image: -1,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 7,
            index: 7,
            image: -1,
            type: TYPE_OF_IMAGE.FILTERED
        }],
        moreDesign: [{
            key: 8,
            index: 8,
            outerTitle: 'טקסט 0',
            image: weddingLogo,
            type: TYPE_OF_IMAGE.HOVER
        }, {
            key: 9,
            index: 9,
            image: tourLogo,
            outerTitle: 'טקסט 1',
            type: TYPE_OF_IMAGE.HOVER
        }, {
            key: 10,
            index: 10,
            image: bibiLogo,
            outerTitle: 'טקסט 2',
            type: TYPE_OF_IMAGE.HOVER
        }, {
            key: 11,
            index: 11,
            image: -1,
            outerTitle: 'טקסט 3',
            type: TYPE_OF_IMAGE.HOVER
        }],
        photoShop: [{
            key: 12,
            index: 12,
            image: photoshop1,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 13,
            index: 13,
            image: photoshop2,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 14,
            index: 14,
            image: photoshop3,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 15,
            index: 15,
            image: photoshop4,
            type: TYPE_OF_IMAGE.FILTERED
        }]
    }
    const FullScreen = () => {

        return <div
            style={{zIndex: 100, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>

            <FiX
                onClick={() => {
                    setShowFullScreen(false)
                }}
                style={{padding: '5vmin', display: 'flex', alignSelf: 'flex-end'}}
                size={'5vh'}/>
            <TextComponent
                noMarginTop={true}
                text={
                    `asdasd
              asdasdsad
              asd`

                }/>
            <div style={{marginTop: '5vmin'}}/>

            {
                imagesArrayOnFullScreen.map((item) => {
                    return <ImageOnFullScreen image={item.image}/>
                })
            }

            <div style={{
                top: window.outerHeight / 2,
                margin: -window.outerHeight / 5 / 1.2,
                position: 'fixed',
                display: 'flex',
                zIndex: 100,

                justifyContent: 'space-between',
                alignItems: 'center',

                width: '100vw',
                height: window.outerHeight / 5
            }}>
                <BsChevronRight
                    onClick={() => {

                    }}
                    color={APP_COLOR.MAIN_COLOR}
                    style={{marginRight: '10vw', zIndex: 200}}
                    size={isDesktopOrLaptop ? '5vh' : '10vmin'}
                />
                <BsChevronLeft
                    color={APP_COLOR.MAIN_COLOR}
                    onClick={() => {

                    }}
                    style={{marginLeft: '10vw', zIndex: 200}}
                    size={isDesktopOrLaptop ? '5vh' : '10vmin'}
                />
            </div>


        </div>
    }
    const onClickFullScreen = (props) => {


        setCurrentIndex(props.index);
        const images = props.images.find((item) => {
            return item.index == currentIndex

        }).imagesOnFullScreen

        setImagesArrayOnFullScreen(images);
    }
    const ShowWork = (props) => {
        const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
        const [showSetMore, setMore] = useState(false);
        return <div style={{
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5%'
        }}>
            <div style={{
                fontFamily: 'OpenSansHebrewCondensedRegular',
                fontSize: isDesktopOrLaptop ? '2rem' : '3rem',
                color: APP_COLOR.MAIN_COLOR,
                textAlign: 'center'
            }}>
                {props.title}
            </div>

            <Row
                onClick={(index) => onClickFullScreen({images: props.row, index})}
                images={props.row}/>
            {
                showSetMore &&
                <>
                    {
                        props.moreArray.map((images) => {
                            return <Row
                                onClick={(index) => onClickFullScreen({images: props.row})}
                                images={images}/>
                        })
                    }


                </>
            }
            {
                props.moreArray.length > 0 &&
                <MoreWork action={() => {
                    setMore(!showSetMore)
                }}/>
            }

        </div>
    }
    const MoreWork = (props) => {
        const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
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
    const MainFrame = () => {
        return <>
            <Header/>
            <ShowWork title={"מיתוג"}
                      moreArray={[images.secondRow, images.secondRow, images.secondRow, images.secondRow]}
                      row={images.firstRow}/>
            <ShowWork title={"עיצובים נוספים"} moreArray={[]} row={images.moreDesign}/>
            <ShowWork title={"עיצובים בפוטושופ"} moreArray={[]} row={images.photoShop}/>
            <div style={{
                marginTop: '2.5%',
                fontFamily: 'OpenSansHebrewCondensedRegular',
                fontSize: isDesktopOrLaptop ? '2rem' : '3rem',
                color: APP_COLOR.MAIN_COLOR,
                textAlign: 'center'
            }}>
                צור קשר
            </div>
            <ContactForm/>
            <Contact/>
        </>
    }
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    const [positionOfBottomDiv, setPositionOfButtonDiv] = useState(0)

    return (


        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
                padding: 0
            }}>
            {
                showFullScreen ? <div
                        style={{}}
                        id={"test"}
                        onLoad={(event) => {
                            setPositionOfButtonDiv(document.getElementById('test').clientHeight)
                        }}>

                        <FullScreen/>
                        {
                            isDesktopOrLaptop &&
                            <div
                                style={{
                                    zIndex: 0,
                                    position: 'absolute',
                                    top: positionOfBottomDiv - window.innerHeight / 10,
                                    height: '20vmin',
                                    width: '100vw',
                                    backgroundColor: APP_COLOR.MAIN_COLOR
                                }}/>
                        }


                    </div>

                    :
                    <MainFrame/>
            }

        </div>


    );
}
const TextComponent = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
    return <div
        style={{
            whiteSpace: 'pre-line',
            marginTop: props.noMarginTop ? 0 : '5%',
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: 'solid',
            borderColor: 'black',
            borderBottomWidth: '1px',
            borderTopWidth: '1px',
            padding: '2vmin',
            width: isDesktopOrLaptop ? '35vw' : '75vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <div style={{
            fontSize: '1.3em',
            fontFamily: 'OpenSansHebrewCondensedRegular',
            color: APP_COLOR.TEXT_COLOR,
            textAlign: 'center'
        }}>
            {
                props.text
            }
        </div>
    </div>
}
const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
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

            <TextComponent text={
                ` היי שמי הגר ואני מעצבת גרפית.
            אז קצת עלי, אני פרפקציוניסטית, תחרותית ותמיד שואפת ללמוד דברים חדשים.

            אני מאוד אוהבת את העיצוב המנימליסטי והנקי ושמה דגש גם על הפרטים הקטנים ביותר.
            
            תוכלו להציץ בתיק העבודות שלי ואם אהבתם והתחברתם צרו איתי קשר ואשמח לקדם את העסק שלכם ע"י מיתוג ייחודי ועכשווי שיבדיל אתכם מהמתחרים.
               `
            }/>
        </div>
    )
};
export default App;
