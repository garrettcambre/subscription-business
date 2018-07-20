import React, { Component } from 'react';
import Login from './login';
import Footer from './footer';
import { Row, Col} from 'reactstrap';
import * as firebase from 'firebase';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[],

    }
  };

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
