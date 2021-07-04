import React, {useEffect, useState} from 'react';
import cosmetic_logo from './res/category/cosmetic/cosmetic_logo.png'
import landLogo from './res/category/land_car/land_logo.png'
import lifeBoatLogo from './res/category/save_boat/life_boat_logo.png'
import betterFlyLogo from './res/category/better_fly/better_fly_logo.png'
import pizzaLogo from './res/category/pizza/pizza_logo.png'
import alian_logo from './res/category/alian/alian_logo.png'
import tourLogo from './res/category/tour/tour_logo.jpg'
import bibiLogo from './res/category/bibi/bibi_logo.jpg'
import weddingLogo from './res/category/events/event_logo.jpg'
import photoshop1 from './res/category/photo_shop/photoshop1.jpg'
import photoshop2 from './res/category/photo_shop/photoshop2.jpg'
import photoshop3 from './res/category/photo_shop/photoshop3.jpg'
import photoshop4 from './res/category/photo_shop/photoshop4.jpg'

import landCar1 from './res/category/land_car/land_car_1.jpg'
import landCar2 from './res/category/land_car/land_car_2.jpg'
import landCar3 from './res/category/land_car/land_car_3.jpg'

import lifeBoat1 from './res/category/save_boat/life_boat_1.jpg'
import lifeBoat2 from './res/category/save_boat/life_boat_2.jpg'
import lifeBoat3 from './res/category/save_boat/life_boat_3.jpg'

import pizza1 from './res/category/pizza/pizza1.jpg'
import pizza2 from './res/category/pizza/pizza2.jpg'
import pizza3 from './res/category/pizza/pizza3.jpg'

import alian1 from './res/category/alian/alian1.jpg'
import alian2 from './res/category/alian/alian2.jpg'
import alian3 from './res/category/alian/alian3.jpg'
import alian4 from './res/category/alian/alian4.jpg'

import betterFly1 from './res/category/better_fly/better_fly_1.jpg'
import betterFly2 from './res/category/better_fly/better_fly_2.jpg'
import betterFly3 from './res/category/better_fly/better_fly_3.jpg'
import betterFly4 from './res/category/better_fly/better_fly_4.jpg'

import event1 from './res/category/events/event_logo.jpg'
import event2 from './res/category/events/event2.jpg'
import event3 from './res/category/events/event_3.jpg'


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
import ImageOnFullScreen from "./components/ImageOnFullScreen";

const App = (props) => {

    const [yPosition, setYPosition] = useState(0);
    const [imagesArrayOnFullScreen, setImagesArrayOnFullScreen] = useState(undefined);
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [twoColumn, setTwoColumn] = useState(false);
    useEffect(() => {
        if (imagesArrayOnFullScreen != undefined) {
            setShowFullScreen(true)
        }

    }, [imagesArrayOnFullScreen])
    const images = {
        firstRow: [{
            key: 0,
            index: 0,
            imagesOnFullScreen: [
                {image: cosmetic1, key: 1, pressAble: true},
                {image: cosmetic2, key: 2, pressAble: false},
                {image: cosmetic3, key: 3, pressAble: true},
                {image: cosmetic4, key: 4, pressAble: false},
            ],
            image: cosmetic_logo,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            key: 1,
            index: 1,
            image: landLogo,
            type: TYPE_OF_IMAGE.FILTERED,
            imagesOnFullScreen: [
                {image: landCar1, key: 1, pressAble: true},
                {image: landCar2, key: 2, pressAble: false},
                {image: landCar3, key: 3, pressAble: true},

            ],
        }, {
            key: 2,
            index: 2,
            image: lifeBoatLogo,
            type: TYPE_OF_IMAGE.FILTERED,
            title: 'My Title',
            imagesOnFullScreen: [
                {image: lifeBoat1, key: 4, pressAble: true},
                {image: lifeBoat2, key: 5, pressAble: false},
                {image: lifeBoat3, key: 6, pressAble: true},

            ],
        }, {
            key: 3,
            index: 3,
            image: betterFlyLogo,
            type: TYPE_OF_IMAGE.FILTERED,
            imagesOnFullScreen: [
                {image: betterFly1, key: 7, pressAble: true},
                {image: betterFly2, key: 8, pressAble: false},
                {image: betterFly3, key: 9, pressAble: true},
                {image: betterFly4, key: 10, pressAble: true},
            ],
        },],
        secondRow: [{
            imagesOnFullScreen: [
                {image: pizza1, key: 1, pressAble: true},
                {image: pizza2, key: 2, pressAble: false},
                {image: pizza3, key: 3, pressAble: true},
            ],

            key: 4,
            index: 4,
            image: pizzaLogo,
            type: TYPE_OF_IMAGE.FILTERED
        }, {
            imagesOnFullScreen: [
                {image: alian1, key: 4, pressAble: true},
                {image: alian2, key: 5, pressAble: false},
                {image: alian3, key: 6, pressAble: true},
                {image: alian4, key: 7, pressAble: true},
            ],
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
            type: TYPE_OF_IMAGE.HOVER,
            imagesOnFullScreen: [
                {image: event1, key: 1, pressAble: true},
                {image: event2, key: 2, pressAble: false},
                {image: event3, key: 3, pressAble: true},
            ],
            twoColumn: true,
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
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et posuere sapien,
                     ut interdum dolor nulla eget mi. Suspendisse eget volutpat lectus. Nulla a scelerisque nibh,`
                }/>
            <div style={{marginTop: '5vmin'}}/>

            {
                twoColumn &&isDesktopOrLaptop?
                    <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                        <div style={{marginLeft:'1vmin',display: 'flex', flexDirection: 'column'}}>
                            {
                                imagesArrayOnFullScreen.map((item, index) => {
                                    return index % 2 == 0 && <div
                                        style={{
                                            display: "flex",
                                            margin: '2vmin',
                                            padding: 0,
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginBottom: 0
                                        }}>
                                        <ImageOnFullScreen width={"55vmin"} key={item.key} image={item.image}/>
                                    </div>
                                })
                            }
                        </div>

                        <div style={{marginRight:'1vmin',display: 'flex', flexDirection: 'column'}}>
                            {
                                imagesArrayOnFullScreen.map((item, index) => {
                                    return index % 2 == 1 && <div
                                        style={{
                                            display: "flex",
                                            margin: '2vmin',
                                            padding: 0,
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginBottom: 0
                                        }}>
                                        <ImageOnFullScreen width={"55vmin"} key={item.key} image={item.image}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    :
                    imagesArrayOnFullScreen.map((item) => {
                        return <ImageOnFullScreen key={item.key} image={item.image}/>
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
        let twoColumn = false;
        const images = props.images.find((item) => {
            console.log("images", item)
            if (item.index == props.index) {
                twoColumn = item.twoColumn
            }
            return item.index == props.index

        }).imagesOnFullScreen

        setTwoColumn(twoColumn)
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
                                onClick={(index) => onClickFullScreen({images, index})}
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
                                    backgroundColor: APP_COLOR.MAIN_COLOR+"50"
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
            borderColor: 'gray',
            borderBottomWidth: '2px',
            borderTopWidth: '2px',
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
