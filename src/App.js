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
    
    // const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(bookObjects => setBooksArray(bookObjects)
          
          )
    }, [])


    const searchedItemsArray = booksArray.filter((bookObject) => {
        return bookObject.title.toLowerCase().includes(searchedItems.toLowerCase())

        ||

        bookObject.author.toLowerCase().includes(searchedItems.toLowerCase())


        ||

        bookObject.genre.toLowerCase().includes(searchedItems.toLowerCase())

    })
    // function handleClick(event){
    //     console.log(event.target.value)

    // }

  //   function addToCart(event){
   
  //          setIsInCart(!isInCart)
  //          console.log(event)

  // }



    
    const allBookCards = searchedItemsArray.map(bookObject => {
        
  
          
            return ( 
        
            <BookCard
            id={bookObject.id} 
            bookObject={bookObject}
            title={bookObject.title} 
            author={bookObject.author}
            genre={bookObject.genre}
            front={bookObject.front}
            back={bookObject.back}
            pages={bookObject.pages}
            firstPublished={bookObject.firstPublished}
            isInCart={bookObject.isInCart}
            handleAddToDom={handleAddToDom}
            // handleClick={handleClick}
            // addToCart={addToCart}
            // isInCart={isInCart}
            
            />

        )
    })

    function handleAddToDom(updatedItem){
      const booksOnDom = booksArray.map((bookObject) => {
        if (bookObject.id === updatedItem.id)
        return {...bookObject, isInCart: updatedItem.isInCart}
      else {
        return bookObject
      }
      }) 
      setBooksArray(booksOnDom)
    }


    function handleSearch(event){
        setSearchedItems(event.target.value)
        console.log(event)
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
        <UserCart 
        booksArray={booksArray} 
        />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
