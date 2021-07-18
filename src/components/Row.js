import React from 'react';
import ImageByType from "./ImageByType";
import {useMediaQuery} from 'react-responsive'
import Test from "./Test";

const Row = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})

    return (
        <>
            <div style={{
                width: '100%',
                alignSelf: 'center',
                marginTop: '5vh',
                display: 'flex',
                flexDirection: isDesktopOrLaptop ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                {
                    props.data.map((item, index) => {

                        return <div  key={index}>
                            <Test
                                item={item}
                                onClick={props.onClick}
                            />
                        </div>/*<div
                            style={{}}
                            key={index}>
                            <ImageByType
                                item={item}
                                onClick={props.onClick}
                               />
                        </div>*/

                    })
                }


            </div>
        </>

    );
};

export default Row;
