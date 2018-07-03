import React, { Component } from 'react';
import Navbar from './navbar';
import Stats from './stats'

class AdminPage extends Component{
render(){
  return(
    <div>
      <Navbar/>
      <Stats/>
    </div>
  );
}
}
export default AdminPage;
