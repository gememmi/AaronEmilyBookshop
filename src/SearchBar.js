import React from "react";

function SearchBar({handleSearch}) {

    return (
        <div className="search-bar" style={{marginLeft: "635px"}}>
            <input 
                type="text"
                className="searchTerm"
                onChange={handleSearch}
                placeholder= "Search book collection..."
                style={{padding: "5px"}}
            />
        </div>

    )
}

export default SearchBar;