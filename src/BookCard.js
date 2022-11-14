import React from 'react';

function BookCard(front, title) {

    <li className="card_item">
        <div className="card">
            <img 
                src= {front}
                alt= {title}
            />
            <div className="card_title">{title}</div>
        </div>
    </li>
}

export default BookCard