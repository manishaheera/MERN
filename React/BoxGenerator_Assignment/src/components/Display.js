import React, {useState} from "react";

const Display = (props) => {

    const {box, setBox} = props;

    return(
    <div>
        <h1> Results </h1>
        {
            box.map((box,index) => (
                <div key={index} style={{
                    backgroundColor: box.color,
                    height: box.height+"px",
                    width: box.width+"px",
                    display:"inline-flex",
                    marginTop: "10px",
                    marginRight:"10px",
                }}>
                </div>
            ))
        }
    </div>
    )
}

export default Display;