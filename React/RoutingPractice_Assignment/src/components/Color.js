import React from 'react';

const Color = (props) => {

    const {id, fontColor, backgroundColor} = props;

    return(
        <div>
            <span style = {{color: fontColor, backgroundColor: backgroundColor}}> 
            ID: {id}
            </span>
        </div>
    )
}

export default Color;

