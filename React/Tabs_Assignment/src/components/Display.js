import React from "react";

const Display = (props) => {
    const { tabs, tabIndex} = props;

    return (

    <div className="content">
        {tabs[tabIndex].content}
    </div>

    )
}

export default Display;