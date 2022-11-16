import React from 'react';

function GiftCard({giftCardTotal}){
    return(
    <div className="gift-card" style = {{textAlign: "center", maxWidth: 200, padding: 5, margin: 5, background: "#8A0505", borderRadius: 10, border: "5px solid #b14848"}}>
        <h1>Your gift card total: </h1>
        <h2>${giftCardTotal}</h2>
    </div>

)

}


export default GiftCard