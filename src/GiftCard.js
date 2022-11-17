import React, {useEffect} from 'react';
import WebFont from 'webfontloader';

function GiftCard({giftCardTotal}){
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Noto Serif Oriya']
          }
        });
       }, []);

    return(
   <section style={{display:"flex", justifyContent: "center" }}>
    <div className="gift-card" style = {{textAlign: "center", maxWidth: 200, padding:3, margin: 5, background: "#8A0505", borderRadius: 10, border: "5px solid #b14848", fontFamily: "Noto Serif Oriya"}}>
        <h4>Your gift card total: </h4>
        <h2>${giftCardTotal}</h2>
    </div>
    </section>

)

}


export default GiftCard