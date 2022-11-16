import React from 'react';
import SearchBar from './SearchBar';

function BooksContainer({allBookCards, handleSearch}) {
 return (
    <div>
        <SearchBar handleSearch={handleSearch} />
         <ul className="cards">
            { allBookCards }
         </ul>
    </div>
)

}

export default BooksContainer

