import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "105px",
        padding: "12px",
        margin: "0 6px 6px",
        borderRadius: 10,
        border: "5px solid #b14848",
        background: "#d43131",
        textDecoration: "none",
        textAlign: "center",
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
