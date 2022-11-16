import React, {useState} from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { red } from '@mui/material/colors';
import { borderRadius } from '@mui/system';

import '@fontsource/roboto/300.css'




function BookCard({bookObject,id, front, title, author, genre, back, pages, price, firstPublished, handleClick, addToCart, isInCart, handleAddToDom, giftCardTotal, setGiftCardTotal}) {

    

    const [displayInfo, setDisplayInfo]= useState(true)
    const [displayInCart, setDisplayInCart] = useState(isInCart)
    
    function handleClick(){
        setDisplayInfo(!displayInfo)
    }
    function handleGiftCardTotal(){
        if(giftCardTotal > 0)
        setGiftCardTotal(giftCardTotal - 10)
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

        <div className="book-item">
            <Card sx={{ maxHeight: 480, maxWidth: 200, padding: 5, margin: 5, background: "#8A0505", borderRadius: 10, border: "5px solid #b14848" }}>
      <CardActionArea>
        <CardMedia       
          component="img"
          height="300"
          onClick={handleClick}
          image={displayInfo ? front : back }
          alt={title}
        />
        <CardContent>
           <Typography>
                <Typography gutterBottom variant="h5" component="div" fontSize={16}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Author: {author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Genre: {genre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Page Count: {pages}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    First Published: {firstPublished}
                </Typography>
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" value={bookObject} onClick={()=>addToCart()}>{displayInCart ? "Remove from cart" : "Add to cart"}          
        </Button>
      </CardActions>
    </Card>
        </div>
    )
}

export default BookCard



