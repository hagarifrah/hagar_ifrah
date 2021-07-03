import React from 'react';

const ImageOnFullScreen = (props) => {
    return <img
        style={{
            zIndex:100,
            width: '100vmin',
            height: 'auto'
        }}
        src={props.image}
    />
}

export default ImageOnFullScreen;
