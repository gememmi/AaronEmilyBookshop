import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
    return (
        <div>
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
