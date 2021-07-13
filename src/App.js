import React, {useEffect, useRef, useState} from 'react';
import cosmetic_logo from './res/category/cosmetic/cosmetic_logo.png'
import landLogo from './res/category/land_car/land_logo.png'
import lifeBoatLogo from './res/category/save_boat/life_boat_logo.png'
import betterFlyLogo from './res/category/better_fly/better_fly_logo.png'
import pizzaLogo from './res/category/pizza/pizza_logo.png'
import alian_logo from './res/category/alian/alian_logo.png'
import tourLogo from './res/category/tour/tour_logo.jpg'
import bibiLogo from './res/category/bibi/bibi_logo.jpg'
import {ReactSVG} from 'react-svg'
import israel from './res/icons/Flag_of_Israel.svg'
import usa from './res/icons/EnglishIcon.svg'
import myGoal1 from './res/category/my_goal/my_goal1.jpg'
import myGoal2 from './res/category/my_goal/my_goal2.jpg'
import myGoal3 from './res/category/my_goal/my_goal3.jpg'

import photoshop1 from './res/category/photo_shop/photoshop1.jpg'
import photoshop2 from './res/category/photo_shop/photoshop2.jpg'
import photoshop3 from './res/category/photo_shop/photoshop3.jpg'
import photoshop4 from './res/category/photo_shop/photoshop4.jpg'

import landCar1 from './res/category/land_car/land_car_4.jpg'
import landCar2 from './res/category/land_car/land_car_5.jpg'
import landCar4 from './res/category/land_car/land_car_6.jpg'
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
import betterFly5 from './res/category/better_fly/better_fly_5.jpg'
import betterFly6 from './res/category/better_fly/better_fly_logo.png'

import event1 from './res/category/events/event_logo.jpg'
import event2 from './res/category/events/event2.jpg'
import event3 from './res/category/events/event_3.jpg'

import UIUX1 from './res/category/ui_ux/ui_ux_1.jpg'
import UIUX2 from './res/category/ui_ux/ui_ux_2.jpg'


import tour7 from './res/category/tour/tour7.jpg'
import tour8 from './res/category/tour/tour8.jpg'
import tour9 from './res/category/tour/tour9.jpg'


import running1 from './res/category/running/running1.jpg'
import running2 from './res/category/running/running2.jpg'
import running3 from './res/category/running/running3.jpg'

import simaLogo from './res/category/sima/sima_logo.png'
import sima1 from './res/category/sima/sima1.jpg'
import sima2 from './res/category/sima/sima2.jpg'
import sima3 from './res/category/sima/sima3.jpg'

import bibi1 from './res/category/bibi/bibi1.jpg'
import bibi2 from './res/category/bibi/bibi2.jpg'
import bibi3 from './res/category/bibi/bibi3.jpg'
import bibi4 from './res/category/bibi/bibi4.jpg'

import {BsChevronRight, BsChevronLeft} from 'react-icons/bs';
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Row from "./components/Row";
import {FiX} from "react-icons/fi"
import {APP_COLOR, marginValue, TYPE_OF_IMAGE} from "./utils/Utils";
import logo from './res/logo.png'
import {useMediaQuery} from "react-responsive";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import cosmetic1 from './res/category/cosmetic/cosmetic1.jpg'
import cosmetic2 from './res/category/cosmetic/cosmetic2.jpg'
import cosmetic3 from './res/category/cosmetic/cosmetic3.jpg'
import cosmetic4 from './res/category/cosmetic/cosmetic4.jpg'
import ImageOnFullScreen from "./components/ImageOnFullScreen";
import {useSwipeable} from "react-swipeable";
import strings from "./localization/localization";


const App = (props) => {

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            leftClick();
        },
        onSwipedRight: () => {
            rightClick();
        },


    });
    const [yPosition, setYPosition] = useState(0);
    const [history, setHistory] = useState([]);
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState(undefined);
    const [twoColumn, setTwoColumn] = useState(false);
    const [moveBetweenCategoriesObjects, setMoveBetweenCategoriesObjects] = useState([]);
    const [lang, setLang] = useState(!navigator.language.includes("he"));
    let stateRef = useRef({
        yPosition,
        history,
        showFullScreen,
        currentIndex,
        currentCategory,
        twoColumn,
        moveBetweenCategoriesObjects
    });

    useEffect(() => {
        stateRef.current.yPosition = yPosition;
    }, [yPosition])
    useEffect(() => {
        stateRef.current.history = history;

    }, [history])
    useEffect(() => {
        stateRef.current.currentIndex = currentIndex;
    }, [currentIndex])
    useEffect(() => {
        stateRef.current.twoColumn = twoColumn;
    }, [twoColumn])

    useEffect(() => {

        if (currentCategory != undefined) {
            stateRef.current.currentCategory = currentCategory;
            window.history.pushState("asfasf", "title");
            setShowFullScreen(true)
        }
    }, [currentCategory])
    useEffect(() => {
        if (currentCategory != undefined && currentCategory.secondLevelEnter) {
            stateRef.current.moveBetweenCategoriesObjects = moveBetweenCategoriesObjects;
        }

    }, [moveBetweenCategoriesObjects])
    useEffect(() => {
        if (!showFullScreen) {
            window.scrollTo(0, yPosition);
            setPositionOfButtonDiv(0)

        }
        stateRef.current.showFullScreen = showFullScreen;

    }, [showFullScreen])

    const allCategories = {
        0: {
            titleOnFullScreen: 'BRANDING- Eden Cosmetics',
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [
                cosmetic1,
                cosmetic2,
                cosmetic3,
                cosmetic4
            ],
            showLogoOnFullScreen: true,
            category: 1,
            mainImage: cosmetic_logo,
            title: 'Cosmetic',
            key: 0,
            id: 0
        },
        1: {
            showLogoOnFullScreen: true,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [

                landCar2,
                landCar1,
                landCar3,
                landCar4
            ],
            category: 1,
            mainImage: landLogo,
            title: 'Land',
            key: 1,
            id: 1
        },
        14: {
            showLogoOnFullScreen: true,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [
                sima3,
                sima2,

            ],
            category: 1,
            mainImage: simaLogo,
            title: 'Sima',
            key: 14,
            id: 14
        },
        2: {
            showLogoOnFullScreen: true,
            type: TYPE_OF_IMAGE.FILTERED,
            category: 1,
            arrayOfImages: [
                lifeBoat1,
                lifeBoat2,
                lifeBoat3,
            ],
            mainImage: lifeBoatLogo,
            title: 'Life Boat',
            key: 2,
            id: 2
        },
        3: {
            showLogoOnFullScreen: true,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [
                betterFly1,
                betterFly2,
                betterFly3,
                betterFly4,
                betterFly5,
            ],
            category: 1,
            mainImage: betterFlyLogo,
            title: 'Better Fly',
            key: 3,
            id: 3
        },
        4: {
            showLogoOnFullScreen: true,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [
                pizza1,
                pizza2,
                pizza3,
            ],
            category: 1,
            mainImage: pizzaLogo,
            title: 'Pizza',
            key: 4,
            id: 4
        },
        5: {
            showLogoOnFullScreen: true,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [
                alian1,
                alian2,
                alian3,
                alian4
            ],
            category: 1,
            mainImage: alian_logo,
            title: 'Alian',
            key: 5,
            id: 5
        },
        6: {
            showLogoOnFullScreen: false,
            twoColumn: true,
            category: 2,
            type: TYPE_OF_IMAGE.HOVER,
            arrayOfImages: [
                event1,
                event2,
                event3,
            ],

            mainImage: event1,
            title: strings.events,
            key: 6,
            id: 6
        },
        7: {
            showLogoOnFullScreen: false,
            twoColumn: true,
            type: TYPE_OF_IMAGE.HOVER,
            showTitle: false,
            arrayOfImages: [
                UIUX1,
                UIUX2,
                myGoal1
            ],
            secondLevelEnter: true,
            nextObject: [{
                twoColumn: false,
                type: TYPE_OF_IMAGE.FILTERED,
                arrayOfImages: [
                    running1,
                    running2,
                    running3,

                ],
                category: 4,
                mainImage: running1,
                key: 5,
                id: 5
            }, {
                twoColumn: false,
                showLogoOnFullScreen: false,
                type: TYPE_OF_IMAGE.FILTERED,
                arrayOfImages: [

                    tour8,
                    tour9,
                    tour7,
                ],
                category: 4,
                mainImage: tourLogo,
                key: 6,
                id: 6
            }, {
                twoColumn: false,
                mainImage: tourLogo,
                showLogoOnFullScreen: false,
                type: TYPE_OF_IMAGE.FILTERED,
                arrayOfImages: [
                    myGoal2,
                    myGoal3,
                    myGoal1,
                ],
                category: 4,
                key: 7,
                id: 7
            }],
            category: 2,
            mainImage: tourLogo,
            title: strings.uiux,
            key: 7,
            id: 7
        },
        8: {
            showLogoOnFullScreen: true,
            category: 2,
            type: TYPE_OF_IMAGE.HOVER,
            arrayOfImages: [
                bibi1,
                bibi2,
                bibi3,
                bibi4,

            ],
            mainImage: bibiLogo,
            title: strings.bookDesign,
            key: 8,
            id: 8
        },
        9: {
            category: 2,
            arrayOfImages: [],
            mainImage: -1,
            title: '',
            key: 9,
            id: 9
        },
        10: {
            showLogoOnFullScreen: false,
            category: 3,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [photoshop1],
            mainImage: photoshop1,
            title: '',
            key: 10,
            id: 10
        },
        11: {
            showLogoOnFullScreen: false,
            category: 3,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [photoshop2],
            mainImage: photoshop2,
            title: '',
            key: 11,
            id: 11
        },
        12: {
            showLogoOnFullScreen: false,
            category: 3,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [photoshop3],
            mainImage: photoshop3,
            title: '',
            key: 12,
            id: 12
        },
        13: {
            showLogoOnFullScreen: false,
            category: 3,
            type: TYPE_OF_IMAGE.FILTERED,
            arrayOfImages: [photoshop4],
            mainImage: photoshop4,
            title: '',
            key: 13,
            id: 13
        }
    }
    const leftClick = () => {
        for (let i = 0; i < Object.keys(moveBetweenCategoriesObjects).length; i++) {


            if (currentIndex == moveBetweenCategoriesObjects[i].key) {
                if (i + 1 > Object.keys(moveBetweenCategoriesObjects).length - 1 && moveBetweenCategoriesObjects[0].mainImage != -1) {
                    setCurrentIndex(moveBetweenCategoriesObjects[0].key)
                    onClickFullScreen(moveBetweenCategoriesObjects[0])
                } else if (moveBetweenCategoriesObjects[i + 1].mainImage != -1) {
                    setCurrentIndex(moveBetweenCategoriesObjects[i + 1].key)
                    onClickFullScreen(moveBetweenCategoriesObjects[i + 1])
                }


                break;
            }
        }
    }
    const rightClick = () => {
        console.log(moveBetweenCategoriesObjects.length)
        for (let i = 0; i < Object.keys(moveBetweenCategoriesObjects).length; i++) {


            if (currentIndex == moveBetweenCategoriesObjects[i].key) {
                if (i - 1 >= 0 && moveBetweenCategoriesObjects[i - 1].mainImage != -1) {
                    setCurrentIndex(moveBetweenCategoriesObjects[i - 1].key)
                    onClickFullScreen(moveBetweenCategoriesObjects[i - 1])
                } else if (moveBetweenCategoriesObjects[Object.keys(moveBetweenCategoriesObjects).length - 1].mainImage != -1) {
                    setCurrentIndex(moveBetweenCategoriesObjects[Object.keys(moveBetweenCategoriesObjects).length - 1].key)
                    onClickFullScreen(moveBetweenCategoriesObjects[Object.keys(moveBetweenCategoriesObjects).length - 1])
                }
                break;
            }
        }
    }

    const FullScreenTest = () => {
        const onClickImage = (index) => {
            if (currentCategory.secondLevelEnter) {
                onClickFullScreen(currentCategory.nextObject[index], true);
                const history1 = history;
                const test = [];
                history1.push(currentCategory);
                setHistory(history1);
            }
        }
        return <div

            {...handlers}
            style={{

                height: currentCategory.arrayOfImages.length <= 1 && !isDesktopOrLaptop ? '100vh' : undefined,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',


            }}>
            {
                currentCategory.showLogoOnFullScreen &&
                <img style={{width: '50vmin'}} src={currentCategory.mainImage}/>
            }

            {
                (currentCategory.showTitle == undefined || currentCategory.showTitle) &&
                <>
                    <TextComponent title={currentCategory.titleOnFullScreen}/>
                </>

            }

            <div   style={{marginTop: '5vmin'}}/>
            {
                twoColumn && isDesktopOrLaptop ?
                    <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                        <div style={{marginLeft: '1vmin', display: 'flex', flexDirection: 'column'}}>
                            {
                                currentCategory.arrayOfImages.map((item, index) => {
                                    return index % 2 == 0 && <div
                                        style={{
                                            zIndex: 200,
                                            display: "flex",
                                            marginTop:currentCategory.secondLevelEnter?'5%':0,
                                        }}>
                                        <ImageOnFullScreen
                                            pressAble={false}
                                            width={"55vmin"}
                                            key={index}
                                            onClick={() => onClickImage(index)}
                                            image={item}/>
                                    </div>
                                })
                            }
                        </div>

                        <div style={{
                            zIndex: 200,

                            marginRight: '1vmin',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {
                                currentCategory.arrayOfImages.map((item, index) => {
                                    return index % 2 == 1 && <div
                                        style={{
                                            zIndex: 200,
                                            display: "flex",
                                            marginTop:currentCategory.secondLevelEnter?'5%':0,

                                        }}>
                                        <ImageOnFullScreen
                                            pressAble={false}
                                            width={"55vmin"}
                                            key={index}
                                            onClick={() => onClickImage(index)}
                                            image={item}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    :
                    currentCategory.arrayOfImages.map((item, index) => {
                        return <div
                            style={{
                                marginTop:currentCategory.secondLevelEnter?'5%':0,
                                display: 'flex',
                                flex:currentCategory.arrayOfImages.length<=1&&!isDesktopOrLaptop?1:0,
                                justifyContent:currentCategory.arrayOfImages.length<=1&&!isDesktopOrLaptop?'center':undefined,
                                alignItems:currentCategory.arrayOfImages.length<=1&&!isDesktopOrLaptop?'center':undefined,
                                zIndex: 100,
                                marginBottom: !isDesktopOrLaptop && index == currentCategory.arrayOfImages.length - 1 ? '2.5%' : 0
                            }}>
                            <ImageOnFullScreen
                                onClick={() => onClickImage(index)}
                                key={index}
                                image={item}/>
                        </div>

                    })
            }
            {
                isDesktopOrLaptop &&
                <>
                    <BsChevronLeft
                        color={APP_COLOR.MAIN_COLOR}
                        onClick={leftClick}
                        style={{
                            position: 'fixed',
                            top: window.innerHeight / 2,
                            left: window.innerWidth / 10,
                            cursor: 'pointer',
                            zIndex: 200
                        }}
                        size={isDesktopOrLaptop ? '5vh' : '10vmin'}
                    />
                    <BsChevronRight
                        onClick={rightClick}
                        color={APP_COLOR.MAIN_COLOR}
                        style={{
                            position: 'fixed',
                            top: window.innerHeight / 2,
                            right: window.innerWidth / 10,
                            cursor: 'pointer',
                            zIndex: 200
                        }}
                        size={isDesktopOrLaptop ? '5vh' : '10vmin'}
                    />
                </>
            }

            {
                history.length > 0 ?
                    <BsChevronLeft
                        color={APP_COLOR.MAIN_COLOR}
                        onClick={() => {
                            setMoveBetweenCategoriesObjects(stateRef.current.moveBetweenCategoriesObjects)
                            setTwoColumn(stateRef.current.history[0].twoColumn);
                            setCurrentCategory(stateRef.current.history[0])
                            setHistory([])

                        }}
                        style={{
                            transform: !lang ? "rotate(0deg)" : "rotate(180deg)",
                            zIndex: 100,
                            position: 'fixed',
                            padding: '5vmin',
                            display: 'flex',
                            alignSelf: 'flex-end'
                        }}
                        size={'5vh'}
                    /> :
                    <FiX
                        onClick={() => {
                            setShowFullScreen(false)
                        }}
                        style={{
                            zIndex: 100,
                            position: 'fixed',
                            padding: '5vmin',
                            display: 'flex',
                            alignSelf: 'flex-end'
                        }}
                        size={'5vh'}/>
            }


        </div>
    }

    const onClickFullScreen = (props, secondLevel) => {
        setCurrentCategory(props);
        const test = [];
        if (!secondLevel && props.category != 4) {
            Object.values(allCategories).map((item) => {
                if (item.category == props.category) {
                    test.push(item)
                }

            })
            setMoveBetweenCategoriesObjects(test);
            setYPosition(window.pageYOffset)

            setCurrentIndex(props.id)
        }
        setTwoColumn(props.twoColumn)

        window.scrollTo(0, 0)
    }
    const ShowWork = (props) => {
        const action = (index) => {
            onClickFullScreen(allCategories[index])
        }
        const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})
        const [showSetMore, setMore] = useState(false);
        return <div style={{
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5vmin'
        }}>
            <div style={{
                fontFamily: 'OpenSansHebrewCondensedRegular',
                fontSize: isDesktopOrLaptop ? '2.5rem' : '3rem',
                color: APP_COLOR.MAIN_COLOR,
                textAlign: 'center'
            }}>
                {props.title}
            </div>

            <Row
                data={props.row}
                onClick={action}
            />
            {
                showSetMore &&
                <>
                    {
                        props.moreArray.map((images) => {
                            return <Row
                                data={images}
                                onClick={action}/>
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
                justifyContent: 'center',
                outline: 'none',
                marginBottom: isDesktopOrLaptop ? 0 : '25vmin'
            }}>
            <BiDotsHorizontalRounded color={"#E9A8A9"} size={isDesktopOrLaptop ? "3vmin" : '10vmin'}/>
        </button>
    }
    const MainFrame = () => {
        return <>
            <button
                onClick={() => {
                    if (lang) {
                        strings.setLanguage('heb');
                        document.getElementById("root").style.direction = "rtl";
                    } else {
                        strings.setLanguage('en');
                        document.getElementById("root").style.direction = "ltr";
                    }

                    setLang(!lang)
                }}
                style={{

                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    margin: '5vmin',
                    alignSelf: 'flex-end',
                    cursor: 'pointer',
                    outline: 'none',
                }}>

                <ReactSVG
                    beforeInjection={svg => {
                        const style = isDesktopOrLaptop ? 'height: 100%;width:5vmin' : 'height: 100%;width:10vmin'
                        svg.setAttribute('style', style);
                        // Height is 190 here to account for `stroke-width: 5`.
                        svg.querySelector('rect').setAttribute('style', 'borderRadius:100;width:15vmin');
                    }}
                    src={lang ? israel : usa}/>
               {/* <div style={{

                    fontFamily: 'OpenSansHebrewCondensedRegular',
                    fontSize: '1.5rem',
                    color: 'black',
                    textAlign: 'center',
                }}>
                    {
                     lang? "Hebrew":'English'
                    }
                </div>*/}
            </button>
            <Header/>
            <ShowWork
                title={"מיתוג"}
                moreArray={[
                    [
                        allCategories["4"],
                        allCategories["5"],
                        allCategories["14"],
                        {
                            mainImage: -1
                        }
                    ]
                ]}
                row={[
                    allCategories["0"],
                    allCategories["1"],
                    allCategories["2"],
                    allCategories["3"]
                ]}/>
            <ShowWork
                title={"עיצובים נוספים"}
                moreArray={[]}
                row={[
                    allCategories["6"],
                    allCategories["7"],
                    allCategories["8"],
                    allCategories["9"]
                ]}/>
            <ShowWork
                title={"עיצובים בפוטושופ"}
                moreArray={[]}
                row={[
                    allCategories["10"],
                    allCategories["11"],
                    allCategories["12"],
                    allCategories["13"]
                ]}/>
            <div style={{

                fontFamily: 'OpenSansHebrewCondensedRegular',
                fontSize: isDesktopOrLaptop ? '2rem' : '3rem',
                marginBottom:'5vmin',
                marginTop:'4.5vmin',
                color: APP_COLOR.MAIN_COLOR,
                textAlign: 'center',
            }}>
                צור קשר
            </div>
            <ContactForm lang={lang}/>
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
                        id={"test"}
                        onLoad={(event) => {
                            setPositionOfButtonDiv(document.getElementById('test').clientHeight)
                        }}>

                        <FullScreenTest/>
                        {
                            (currentCategory.arrayOfImages.length>=2||isDesktopOrLaptop)&&
                            <div
                                style={{
                                    zIndex: 0,
                                    position: 'absolute',
                                    top: positionOfBottomDiv - window.innerHeight / 10,
                                    height:positionOfBottomDiv===0?0: '20vmin',
                                    width: '100vw',
                                    backgroundColor: APP_COLOR.MAIN_COLOR + "50"
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
    const lineStyle = {
        width: '10vmin',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: APP_COLOR.TEXT_COLOR,
    }
    return <div
        style={{
            whiteSpace: 'pre-line',
            marginTop: '1%',
            borderWidth: 0,
            padding: '2vmin',
            width: isDesktopOrLaptop ? '35vw' : '75vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',

        }}>
        {
            props.showLines &&
            <div style={Object.assign(lineStyle, {marginBottom: '5vmin'})}/>
        }
        <div style={{
            fontSize: '1em',
            fontFamily: 'AssistantRegular',
            color: APP_COLOR.TEXT_COLOR,
            textAlign: 'center'
        }}>
            {
                props.title
            }
        </div>
        <div style={{
            fontSize: '1em',
            fontFamily: 'AssistantRegular',
            color: APP_COLOR.TEXT_COLOR,
            textAlign: 'center'
        }}>
            {
                props.text
            }
        </div>

        {
            props.showLines &&
            <div style={Object.assign(lineStyle, {marginTop: '5vmin'})}/>
        }
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
            <div style={{
                marginBottom: isDesktopOrLaptop ? 0 : '10vmin',
                width: isDesktopOrLaptop ? '50vmin' : '85vmin',
            }}>
                <img style={{width: '100%', height: 'auto'}} src={logo}/>
            </div>

            <TextComponent
                showLines={true}
                text={
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
