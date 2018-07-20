import React, { Component } from 'react';
import NavClass from './navbar';
import Stats from './stats'

class AdminPage extends Component{
render(){
  return(
    <div>
      <NavClass isAdminLoggedIn={this.props.isAdminLoggedIn}/>
      <Stats/>
    </div>
  );
}
}
export default AdminPage;
