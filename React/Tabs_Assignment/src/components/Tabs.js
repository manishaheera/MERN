import React from "react";

const Tabs = (props) => {
    const {tabs, tabIndex, setTabIndex} = props;

    const setTab = (index) => {
    setTabIndex(index);
    }

    return(
        
        <div>
            <span> CLICK A TAB TO VIEW ITS CONTENT! </span>
            {
                tabs.map((tab, index) => (
                    <div className="tabs" onClick={(e) => setTab(index) }>
                        {tab.label}
                    </div>
                ))
            }
        </div>

    )
}

export default Tabs; 


