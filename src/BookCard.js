import React, {useState} from 'react';

function BookCard({bookObject,id, front, title, author, genre, back, pages, price, firstPublished, handleClick, addToCart, isInCart, handleAddToDom, giftCardTotal, setGiftCardTotal}) {
    const [displayInfo, setDisplayInfo]= useState(true)
    const [displayInCart, setDisplayInCart] = useState(isInCart)
    
    function handleClick(){
        setDisplayInfo(!displayInfo)
    }
    function handleGiftCardTotal(){
        if(giftCardTotal > 0)
        setGiftCardTotal(giftCardTotal - 10)
    }
    function addToCart(){
        setDisplayInCart(!displayInCart)
        
        fetch(`http://localhost:3000/books/${id}`,
        {
        method:"PATCH",
        headers:{"Content-Type":"application/json",
        },
        body:JSON.stringify({isInCart: !bookObject.isInCart,}),
        }
        )
        .then((r)=>r.json())
        .then((updatedItem)=> handleAddToDom(updatedItem));
    }
        
    return (

        <li className="card_item">
            <div className="card">
                <img 
                    src= {displayInfo ? front : back }
                    alt= {title}
                    onClick= {handleClick}
                />
                {displayInfo ?
                 <div className="card_title">
                    <h3>Title: </h3>
                    <p>{title}</p>
                    <h3>Author: </h3>
                    <p>{author}</p>
                    </div>
                :
                <div className="card_title">
                    <h3>Genre:</h3>
                    <p>{genre}</p>
                    <h3>Page Count: </h3>
                    <p>{pages}</p>
                    <h3>Year Published: </h3>
                    <p>{firstPublished}</p>
                    </div>
                    
        }
        <button value={bookObject} onClick={()=>addToCart()}>{displayInCart ? "Remove from cart" : "Add to cart"}</button>
        <button onClick={handleGiftCardTotal}>${price}</button>

            </div>
        </li>
    )
}

export default BookCard



