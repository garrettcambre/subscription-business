import React, { Component } from 'react';
import Login from './login';
import Footer from './footer';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
    <div className='App'>

    <Login/>
      <Footer/>
    </div>
  );
      }
    }


export default App;
