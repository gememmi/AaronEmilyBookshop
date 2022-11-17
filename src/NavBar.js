import React, {useEffect} from 'react';
import { NavLink } from "react-router-dom";
import WebFont from 'webfontloader';

function NavBar(){
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Noto Serif Oriya']
          }
        });
       }, []);

    const linkStyles = {
        display: "inline-block",
        width: "105px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#d43131",
        border: "5px solid #b14848",
        borderRadius: 10,
        textDecoration: "none",
        textAlign: "center",
        color: "white",
        fontFamily: "Noto Serif Oriya",
        marginTop: "25px"
      };
    return (
        <div style={{display:"flex", justifyContent: "center"}}>
            <NavLink style={linkStyles} exact to="/about" >
                About
            </NavLink>
            <NavLink style={linkStyles} exact to="/bookscontainer" >
                Books Container
            </NavLink>
            <NavLink style={linkStyles} exact to="/usercart" >
                User Cart
            </NavLink>
        </div>
    )
}

export default NavBar;
