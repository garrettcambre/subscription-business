import React, { Component } from 'react';
import Navbar from './navbar';


class UserPage extends Component{
render(){
  return(
    <div>
      <Navbar/>
      <h1>{this.props.users}</h1>
    </div>
  );
}
}

export default UserPage;
