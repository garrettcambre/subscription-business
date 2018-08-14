import React, { Component } from 'react';
import NavClass from './navbar';

class Home extends Component{
render(){
  return(
    <div>
      <NavClass/>
      <h1>Hello</h1>
      <br/>
      <br/>
      <p>We are QuickHelp, the Cincinnati areas best handyman service for those on a structured income!
        It is our mission to provide service when you need it, from lightbulbs to light renovation we can help.
        We offer subscription plans to allow anyone who may need to keep a strict budget, so you can put money away for the things you need done. </p>
    </div>
  );
}
}

export default Home;
