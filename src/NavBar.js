import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink exact to="/about" >
                About
            </NavLink>
            <NavLink exact to="/bookscontainer" >
                Books Container
            </NavLink>
            <NavLink exact to="/usercart" >
                User Cart
            </NavLink>
        </div>
    )
}

export default NavBar;
