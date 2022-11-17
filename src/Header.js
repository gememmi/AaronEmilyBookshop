import React from 'react';
import image from './images/scroll.png'


function Header(){
return (
    <div style={{textAlign:"center", width: "500px", position:"relative"}}>
        <h1 style={{position: "absolute", top: "25"}}>Aaron & Emily's Book Shop</h1>
        <img src= {image} style={{ maxWidth: "700px", position: "absolute"}}/>
    </div>
)
}

export default Header;