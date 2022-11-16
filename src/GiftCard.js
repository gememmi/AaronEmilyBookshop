import React from 'react';

function GiftCard({giftCardTotal}){
    return(
    <div className="gift-card">
        <h1>Your gift card total: </h1>
        <h2>${giftCardTotal}</h2>
    </div>

)

}


export default GiftCard