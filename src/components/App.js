import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./links";
// pass this data down as props to the child component(s) that need it!
import {user} from "../data/user";
// console.log(user);

function App() {
  
  return(
    <div>
      <NavBar />
      <About    bio = "I made this!"  />
       <Home   name = "Liza" city = "New York" color = "firebrick"/>
      <Links github ="https://github.com/liza" linkedin = "https://www.linkedin.com/in/liza/"/>
    </div>
  );
}

export default App;
