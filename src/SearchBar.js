import React from "react";

function SearchBar({handleSearch}) {

    return (
        <div className="search-bar">
            <input 
                type="text"
                className="searchTerm"
                onChange={handleSearch}
            />
        </div>

    )
}

export default SearchBar;