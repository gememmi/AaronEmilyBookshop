import React from "react";

function SearchBar({handleSearch}) {

    return (
        <div className="search-bar"  style={{display:"flex", justifyContent: "center"}}>
            <input 
                type="text"
                className="searchTerm"
                onChange={handleSearch}
                placeholder= "Search book collection ..."
                style={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "50px", paddingRight:"50px", border: "2px solid #8A0505"}}
            />
        </div>

    )
}

export default SearchBar;