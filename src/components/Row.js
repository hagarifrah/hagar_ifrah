import React from 'react';
import ImageByType from "./ImageByType";
import {useMediaQuery} from 'react-responsive'

const Row = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minDeviceWidth: 1224})

    return (
        <>
            <div style={{
                marginTop: '5vh',
                display: 'flex',
                flexDirection: isDesktopOrLaptop ? 'row' : 'column',
                alignItems:'center',
            }}>

                {
                    props.images.map((image,index) => {
                        return <div style={{

                        }} key={image.key}>
                            <ImageByType image={image}/>
                        </div>

                    })
                }


            </div>
        </>

    );
};

export default Row;
