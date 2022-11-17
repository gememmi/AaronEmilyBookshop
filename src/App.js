import React, {useState, useEffect} from 'react';
import { Switch, Route} from "react-router-dom";
import BooksContainer from './BooksContainer'; 
import BookCard from './BookCard';
import UserCart from './UserCart';
import NavBar from './NavBar';
import About from './About';
import GiftCard from "./GiftCard";
// import Header from "./Header";


import image from './images/bookshelf-1082309_1280.jpeg';



function App() {

    const [booksArray, setBooksArray] = useState([])
    const [ searchedItems, setSearchedItems] = useState("")
    const [giftCardTotal, setGiftCardTotal] = useState(50)


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
        ||
              bookObject.pages.toString().includes(searchedItems.toString()) 
        ||
              bookObject.firstPublished.toString().includes(searchedItems.toString())           
      })

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
              price={bookObject.price}
              firstPublished={bookObject.firstPublished}
              isInCart={bookObject.isInCart}
              handleAddToDom={handleAddToDom}
              giftCardTotal= {giftCardTotal}
              setGiftCardTotal= {setGiftCardTotal}
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
    }

  return (
    <div className="App"  style={{ minHeight: "100vh", backgroundImage:`url(${image})` }}>
      {/* <div>
      <Header />
      </div> */}

      <NavBar />
      <GiftCard giftCardTotal={giftCardTotal} setGiftCardTotal={setGiftCardTotal}/>
      
      <Switch>
     
        <Route exact path = "/about" >
          <About />
        </Route>

        <Route exact path = "/bookscontainer">
          <BooksContainer 
         allBookCards={allBookCards}
         handleSearch={handleSearch}
         />
        </Route>

        <Route exact path ="/usercart">
          <UserCart 
            booksArray={booksArray}
            // Potential boilerplate
            giftCardTotal={giftCardTotal}
            setGiftCardTotal={setGiftCardTotal}
            handleAddToDom={handleAddToDom}
           />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
