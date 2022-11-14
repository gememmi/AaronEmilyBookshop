import React, {useState, useEffect} from 'react';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import UserCart from './UserCart';
import GiftCard from './GiftCard';

function BooksContainer() {

    const [booksArray, setBooksArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(bookObjects => setBooksArray(bookObjects))
    }, [])

    const allBookCards = booksArray.map(bookObject => {
        return (
            <BookCard 
            key={bookObject.id} 
            bookObject={bookObject}
            title={bookObject.title} 
            author={bookObject.author}
            genre={bookObject.genre}
            front={bookObject.front}
            back={bookObject.back}
            pages={bookObject.pages}
            firstPublished={bookObject.firstPublished}
            />

        )
    })

    console.log(allBookCards)

    return (
        <div>
            {/* <SearchBar /> */}
            <ul className="cards">
                { allBookCards }
            </ul>
        </div>
    );

}

export default BooksContainer

