import React, {useState, useEffect} from 'react';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import UserCart from './UserCart';
import GiftCard from './GiftCard';

function BooksContainer({allBookCards, handleSearch}) {

   

    return (
        <div>
            <SearchBar 
            handleSearch={handleSearch}
            />
            <ul className="cards">
                { allBookCards }
            </ul>
        </div>
    );

}

export default BooksContainer

