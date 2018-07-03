import React, { Component } from 'react';
import './App.css';

class Navbar extends Component{
render(){
  let isLoggedIn = true;
  if (isLoggedIn){
  return(
    <div className='navbar' >
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
} else{
  return(
    <div className='navbar' >
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  );
}
}
}

export default Navbar;
