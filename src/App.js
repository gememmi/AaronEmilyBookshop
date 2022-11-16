import React from 'react';
import { Switch, Route} from "react-router-dom";
import BooksContainer from './BooksContainer'; 
import BookCard from './BookCard';
import UserCart from './UserCart';
import NavBar from './NavBar';
import About from './About'

function App() {

  

  return (
    <div className="App">
      <NavBar />

     <Switch>
     <Route exact path = "/about" >
        <About />
      </Route>

      <Route exact path = "/bookscontainer">
         <BooksContainer />
      </Route>

      <Route exact path ="/usercart">
        <UserCart />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
