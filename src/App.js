import React, {useState, useEffect} from 'react';
import { Switch, Route} from "react-router-dom";
import BooksContainer from './BooksContainer'; 
import UserCart from './UserCart';
import NavBar from './NavBar';
import About from './About'
import SearchBar from './SearchBar'
import BookCard from './BookCard'

function App() {

    const [booksArray, setBooksArray] = useState([])
    const [ searchedItems, setSearchedItems] = useState("")
    const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(bookObjects => setBooksArray(bookObjects))
    }, [])

    const searchedItemsArray = booksArray.filter((bookObject) => {
        return bookObject.title.toLowerCase().includes(searchedItems.toLowerCase())

        ||

        bookObject.author.toLowerCase().includes(searchedItems.toLowerCase())


        ||

        bookObject.genre.toLowerCase().includes(searchedItems.toLowerCase())

    })
    function handleClick(event){
        console.log(event.target.value)

    }

    
    const allBookCards = searchedItemsArray.map(bookObject => {
        
  
          
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
            handleClick={handleClick}
            />

        )
    })



    function handleSearch(event){
        setSearchedItems(event.target.value)
    }
  

  return (
    <div className="App">
      <NavBar />

     <Switch>
     <Route exact path = "/about" >
        <About />
      </Route>

      <Route exact path = "/bookscontainer">
         <BooksContainer allBookCards={allBookCards}
         handleSearch={handleSearch}
          />
      </Route>

      <Route exact path ="/usercart">
        <UserCart />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
