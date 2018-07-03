import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';

class UserPage extends Component{
render(){
  return(
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}
}

export default UserPage;
