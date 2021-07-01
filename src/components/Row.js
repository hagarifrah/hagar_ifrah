import React from 'react';
import ImageByType from "./ImageByType";
import {useMediaQuery} from 'react-responsive'

const Row = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minDeviceWidth: 1224})
    const isBigScreen = useMediaQuery({minDeviceWidth: 1824})
    const isTabletOrMobile = useMediaQuery({maxWidth: 1224})
    const isTabletOrMobileDevice = useMediaQuery({maxDeviceWidth: 1224})
    const isPortrait = useMediaQuery({orientation: 'portrait'})
    const isRetina = useMediaQuery({minResolution: '2dppx'})
    console.log("isDesktopOrLaptop", isDesktopOrLaptop)
    return (
        <>
            <div style={{
                marginTop: '5vh',
                display: 'flex',


                flexDirection: isDesktopOrLaptop ? 'row' : 'column',
            }}>

                {
                    props.images.map((image) => {
                        return <div key={image.key}>
                            <ImageByType image={image}/>
                        </div>

                    })
                }


            </div>
        </>

    );
};

export default Row;
