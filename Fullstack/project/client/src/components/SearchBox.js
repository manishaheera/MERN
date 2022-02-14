import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBox = (props) => {

    return(
        
        <div className="search-box">

            <MdSearch className="search-icons" size="1.3em" />
            <input className="search-input" type="text" placeholder="type to search..." />

        </div>
    )
}

export default SearchBox;