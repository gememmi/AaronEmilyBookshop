import React, { useState, useEffect } from 'react';  
import BookCard from './BookCard'

function UserCart(){

    const [userBooksArray, setUserBooksArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(bookObjects => setUserBooksArray(bookObjects))
    }, [])
    
    

    const usersBooks = userBooksArray.filter(bookObject => {
        return bookObject.isInCart === true})
    
    console.log(usersBooks)

    const mappedBooks = usersBooks.map((book) =>
       <h1>{book.title}</h1>
    )
    

    return(

        <div>
            {mappedBooks}
        </div>
        
    )

}

export default UserCart;