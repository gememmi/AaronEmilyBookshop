import React, { useState, useEffect } from 'react';  


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';

function UserCart({giftCardTotal, setGiftCardTotal, booksArray }){

    const [userBooksArray, setUserBooksArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(response => response.json())
        .then(bookObjects => setUserBooksArray(bookObjects))
    }, [])
    
    

    const usersBooks = userBooksArray.filter(bookObject => {
        return bookObject.isInCart === true})
    
    
    const mappedBooks = usersBooks.map((bookObject) => {
    
      <h1>{bookObject.title}</h1>

    function handleGiftCardTotal(){
      if(giftCardTotal > 0 && giftCardTotal > bookObject.price){
        {setGiftCardTotal((giftCardTotal) => giftCardTotal - bookObject.price)
          alert('Thank you for your purchase!')}

  }
    else {
       alert('Declined!')
    }
    }

        function handleAddToDom(updatedItem){
            const booksOnDom = userBooksArray.map((bookObject) => {
              if (bookObject.id === updatedItem.id)
                return {...bookObject, isInCart: updatedItem.isInCart}
              else {
                return bookObject
              }
              }) 
              setUserBooksArray(booksOnDom)
            }

        function addToCart(){
            // setDisplayInCart(!displayInCart)
            
            fetch(`http://localhost:3000/books/${bookObject.id}`,
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

        <div className="book-item">
            <Card sx={{ maxHeight: 500, alignItems: "flex start", justifyContent:"space-between", maxWidth: 200, padding: 5, margin: 5, background: "#f5f12c", borderRadius: 10, border: "5px solid #b14848" }}>
      <CardActionArea>
        <CardMedia 
          sx={{ borderRadius: 10, border: "5px solid #b14848"}}
           
          component="img"
          height="300"
          image={bookObject.front}
          alt={bookObject.title}
        />
        <CardContent>
           <Typography>
                <Typography gutterBottom variant="h5" component="div" fontSize={16}>
                    {bookObject.title}
                </Typography>
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{border: "2px solid #2094e6"}} size="small" color="primary" value={bookObject} onClick={()=>addToCart()}>{"Remove from cart" }          
        </Button>
        <Button sx={{border: "2px solid #2094e6"}} size="small"   color="primary" value={bookObject} onClick={handleGiftCardTotal
           
            
            
          }>Buy for ${bookObject.price}          
        </Button>     
      </CardActions>
    </Card>
        </div>
    )

    }  
    )
    
    // Potential boilerplate
    // const [displayInCart, setDisplayInCart] = useState(bookObject.isInCart)

    // function handleGiftCardTotal(){
    //     if(giftCardTotal > 0)
    //     setGiftCardTotal(giftCardTotal - 10)
    // }

    // function addToCart(){
    //     setDisplayInCart(!displayInCart)
        
    //     fetch(`http://localhost:3000/books/${bookObject.id}`,
    //     {
    //     method:"PATCH",
    //     headers:{"Content-Type":"application/json",
    //     },
    //     body:JSON.stringify({isInCart: !bookObject.isInCart,}),
    //     }
    //     )
    //     .then((r)=>r.json())
    //     .then((updatedItem)=> handleAddToDom(updatedItem));


    // }

  //   ()=> { 
  //     handleGiftCardTotal()
  //     alert('Thank you for your purchase!')
  // }

    
    return(

        <div>
            <Grid className="cards-list" 
                    container spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start" >
                            { mappedBooks }    
                </Grid>
        </div>
        
    )

}

export default UserCart;