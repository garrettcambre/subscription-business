import React, { Component } from 'react';
import Login from './login';
import Footer from './footer';
import { Container, Row, Col} from 'reactstrap';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Row>
           <Col xs="3"></Col>
           <Col med="auto">
           <Login/>
           <Footer/>
           </Col>
         <Col xs="3"></Col>
       </Row>
     </div>
    );
  }
}


export default App;
