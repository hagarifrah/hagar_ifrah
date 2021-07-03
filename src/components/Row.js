import React from 'react';
import ImageByType from "./ImageByType";
import {useMediaQuery} from 'react-responsive'

const Row = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})

    return (
        <>
            <div style={{
                width:'100%',
                alignSelf:'center',
                marginTop: '5vh',
                display: 'flex',
                flexDirection: isDesktopOrLaptop ? 'row' : 'column',
                alignItems:'center',
                justifyContent:'center',
            }}>

                {
                    props.images.map((image,index) => {
                        return <div style={{
                        }} key={image.key}>
                            <ImageByType onClick={props.onClick} image={image}/>
                        </div>

                    })
                }


            </div>
        </>

    );
};

export default Row;
