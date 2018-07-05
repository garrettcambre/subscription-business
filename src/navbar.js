import React, { Component } from 'react';
import './App.css';

class Navbar extends Component{
render(){
  if (this.props.isAdminLoggedIn){
  return(
    <div >
      <ul>
        <li className='navbar'>2</li>
        <li className='navbar'>2</li>
        <li className='navbar'>2</li>
        <li className='navbar'>2</li>
        <li className='navbar'>2</li>
        <li className='navbar'>2</li>
      </ul>
    </div>
  );
} else{
  return(
    <div  >
      <ul>
        <li className='navbar'>1</li>
        <li className='navbar'>1</li>
        <li className='navbar'>1</li>
        <li className='navbar'>1</li>
        <li className='navbar'>1</li>
      </ul>
    </div>
  );
}
}
}

export default Navbar;
