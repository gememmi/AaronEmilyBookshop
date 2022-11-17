
import React, {useEffect} from 'react';
import WebFont from 'webfontloader';

function About (){
  
   useEffect(() => {
      WebFont.load({
        google: {
          families: ['Noto Serif Oriya']
        }
      });
     }, []);
     
   return (
      <section className="about" style={{ maxWidth: "500px", display: "flex", justifyContent: "center", marginLeft: "450px"}}>
   <div className="about" style={{textAlign: "center", lineHeight: "2", fontSize: "18px", padding: "20px", fontFamily: "Noto Serif Oriya", backgroundColor: "#b14848", borderRadius:"15px", border:"5px solid #8A0505"}}>
      <h1 style={{fontWeight: "900", fontSize: "27px"}}>Welcome to Aaron & Emily's Book Shop!</h1>

   
   <p className="about-para">
         
      Here, you can shop through a small selection of some of our favorite books. 
      If you find something you like, feel free to click the button to add the book to your cart.
      </p>

      <p className="about-para">
      No longer interested in purchasing that book? Just remove it from your cart with the same button!
      If you are searching for something in particular, use our search bar where you can search for books based on author, title, or genre.
      Thanks for shopping with us!
      </p>
   
   </div>
   </section>
   )
   
  
}

export default About;