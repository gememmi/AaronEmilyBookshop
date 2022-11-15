import React, {useState} from 'react';

function BookCard({bookObject,id, front, title, author, genre, back, pages, firstPublished, handleClick, addToCart, isInCart, handleAddToDom}) {
    const [displayInfo, setDisplayInfo]= useState(true)
    const [displayInCart, setDisplayInCart] = useState(isInCart)
    console.log(displayInCart)
    

    function handleClick(){
        setDisplayInfo(!displayInfo)
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
        <button value={bookObject} onClick={()=>addToCart()}>{displayInCart ? "Remove from cart" : "Add to cart"}</button>

            </div>
        </li>
    )
}

export default BookCard