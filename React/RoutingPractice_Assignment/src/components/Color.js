import React from 'react';

const Color = (props) => {

    const {id, fontColor, backgroundColor} = props;

    if (isNaN(id)) {
        return(
            <div style = {{color: fontColor, backgroundColor: backgroundColor}}>
            text: {id} 
            </div>
        )
        } else {
            return (
            <div style = {{color: fontColor, backgroundColor: backgroundColor}}>
                number: {id}
            </div>
        )
        }
    }

export default Color;

