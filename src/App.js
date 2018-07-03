import React, { Component } from 'react';
import AdminPage from './adminPage';
import UserPage from './userPage';
import Login from './login'
import Footer from './footer';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  super(props)
this.state= {isLoggedInAdmin: true}
}
  render() {
    let isLoggedInAdmin = false;
    if (isLoggedInAdmin){
    return (
      <div>
        <Login/>
        <AdminPage/>
        <Footer/>
      </div>
    );
    }
    else{
      return (
        <div>
          <Login/>
          <UserPage/>
          <Footer/>
        </div>
      );
      }
    }
  }

export default App;
