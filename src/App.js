import React, {useState,useEffect} from 'react';

import BooksContainer from './BooksContainer'; 
import BookCard from './BookCard';
import UserCart from './UserCart';
import NavBar from './NavBar';
import About from './About'

function App() {


    const [booksArray, setBooksArray] = useState([])
    const [searchedItems, setSearchedItems] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(bookObjects => setBooksArray(bookObjects))
    }, [])

    const searchedItemsToDisplay = booksArray.filter((bookObject) => {

        return bookObject.title.toLowerCase().includes(searchedItems.toLowerCase())

        || 

        bookObject.author.toLowerCase().includes(searchedItems.toLowerCase())

        || 

        bookObject.genre.toLowerCase().includes(searchedItems.toLowerCase())

    })

    const allBookCards = searchedItemsToDisplay.map(bookObject => {
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

    function handleSearch(event) {
          setSearchedItems(event.target.value)
      }

  return (
    <div className="App">
      <BooksContainer 
      allBookCards={allBookCards}
      handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
