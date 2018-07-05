import React, { Component } from 'react';
import AdminPage from './adminPage';
import UserPage from './userPage';


class Login extends Component{
  constructor(props){
    super(props)
    this.state ={ isUserLoggedIn: false, isAdminLoggedIn: false}

      this.handleUserClick=this.handleUserClick.bind(this);
      this.handleAdminClick=this.handleAdminClick.bind(this);
    }



handleUserClick(){
  this.setState({isUserLoggedIn: true, isAdminLoggedIn: false});
  console.log('changed state')
};
handleAdminClick(){
  this.setState({isUserLoggedIn: false, isAdminLoggedIn: true});
    console.log('changed state')
};


render(){
  if (this.state.isAdminLoggedIn){
  return (
    <div>
      <div>
        <button onClick={this.handleAdminClick}>login admin</button>
        <button onClick={this.handleUserClick}>login user</button>
      </div>
      <AdminPage isAdminLoggedIn={this.state.isAdminLoggedIn}/>
    </div>
  );
}else{
    return (
      <div>
        <div>
          <button onClick={this.handleAdminClick}>login admin</button>
          <button onClick={this.handleUserClick}>login user</button>
        </div>

        <UserPage/>
      </div>
    );
}
}
}



export default Login;
