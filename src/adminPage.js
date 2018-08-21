import React, { Component } from 'react';
import NavClass from './navbar';
import Stats from './stats'

class AdminPage extends Component{
render(){
  return(
    <div>
      <NavClass isAdminLoggedIn={this.props.isAdminLoggedIn}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>congrats, youre an admin</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Stats/>
    </div>
  );
}
}
export default AdminPage;
