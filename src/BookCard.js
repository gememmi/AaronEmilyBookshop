import React, {useState} from 'react';

function BookCard({front, title, author, genre, back, pages, firstPublished}) {
    const [displayInfo, setDisplayInfo]= useState(true)

    function handleClick(){
        setDisplayInfo(!displayInfo)
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

            </div>
        </li>
    )
}

export default BookCard