import React, {useState} from 'react';

function BookCard({bookObject, front, title, author, genre, back, pages, firstPublished, handleClick}) {
    const [displayInfo, setDisplayInfo]= useState(true)

    function handleClick(){
        setDisplayInfo(!displayInfo)
    }
    function addToCart(){

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
                    <p>{title}</p>
                    <p>{author}</p>
                    </div>
                :
                <div className="card_title">
                    <p>{genre}</p>
                    <p>{pages}</p>
                    <p>{firstPublished}</p>
                    </div>
                    
        }
        <button value={bookObject} onClick={addToCart}>Add to Cart</button>

            </div>
        </li>
    )
}

export default BookCard