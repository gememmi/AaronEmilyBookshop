import React from 'react';
// import BookCard from './BookCard';
import SearchBar from './SearchBar';
// import UserCart from './UserCart';
// import GiftCard from './GiftCard';

function BooksContainer({allBookCards, handleSearch}) {

    return (

    <div>
    <SearchBar handleSearch={handleSearch} />
    <ul className="cards">
        { allBookCards }
    </ul>
</div>)


    // const [booksArray, setBooksArray] = useState([])
    // const [ searchedItems, setSearchedItems] = useState("")
    // const [userBooks, setUserBooks] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/books')
    //     .then(response => response.json())
    //     .then(bookObjects => setBooksArray(bookObjects))
    // }, [])

    // const searchedItemsArray = booksArray.filter((bookObject) => {
    //     return bookObject.title.toLowerCase().includes(searchedItems.toLowerCase())

    //     ||

    //     bookObject.author.toLowerCase().includes(searchedItems.toLowerCase())


    //     ||

    //     bookObject.genre.toLowerCase().includes(searchedItems.toLowerCase())

    // })
    // function handleClick(event){
    //     console.log(event.target.value)

    // }

    
    // const allBookCards = searchedItemsArray.map(bookObject => {
        
  
          
    //         return ( 
        
    //         <BookCard
    //         key={bookObject.id} 
    //         bookObject={bookObject}
    //         title={bookObject.title} 
    //         author={bookObject.author}
    //         genre={bookObject.genre}
    //         front={bookObject.front}
    //         back={bookObject.back}
    //         pages={bookObject.pages}
    //         firstPublished={bookObject.firstPublished}
    //         handleClick={handleClick}
    //         />

    //     )
    // })



    // function handleSearch(event){
    //     setSearchedItems(event.target.value)
    // }
    


  

 

}

export default BooksContainer

