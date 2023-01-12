import React from "react";

function About(props) {
  if(!props.bio){
    return null;
  }else{
   
    return (
    <div id="about">
      <p>{props.bio}</p>
      <h2>About Me</h2>
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
    </div>
  );
  }
}

export default About;
