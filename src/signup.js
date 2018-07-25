import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Signup extends Component{
constructor(props){
  super(props)
  this.state={

    errorCode:'',
    errorMessage:''
  }

  //bind this here

}
//functions go here



  /*  isActive": false,
    "balance": 255.67,
    "maxBalance":500,
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "name": "Josephine Meyers",
    "gender": "female",
    "email": "josephinemeyers@quinex.com",
    "phone": "+1 (927) 464-2235",
    "address": "239 Ridgecrest Terrace, Cincinnati, Ohio, 58364",
    "registered": "09-29-2017 T06:36:35 +04:00"
    email subscribed: true
    email verified : true


    */




  render(){
    return(
      <div>
        <Button color="primary" onClick={this.props.toggleSignup}>Sign Up</Button>
        <Modal isOpen={this.props.signupModal} toggle={this.props.toggleSignup} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleSignup}>Modal title</ModalHeader>
          <ModalBody>
              <div className='UserLogin'>
                <form  >
                  <p>Name</p>
                  <input type= 'text' onChange={this.props.handleNameChange} value={this.props.inputName}/>
                  <br/>
                  <p>email</p>
                  <input type='text'  onChange={this.props.handleEmailChange} value={this.props.inputEmail}/>
                  <br/>
                  <p>password</p>
                  <input type= 'text' onChange={this.props.handlePasswordChange} value={this.props.inputPassword}/>
                  <br/>
                  <p>Address</p>
                  <input type= 'text' onChange={this.props.handleAddressChange} value={this.props.inputAddress}/>
                  <br/>
                  <p>Perferred Phone Number</p>
                  <input type= 'text' onChange={this.props.handleNumberChange} value={this.props.inputNumber}/>
                  <br/>
                  <p>{this.state.errorCode} {this.state.errorMessage}</p>
                  <br/>
                </form>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.handleSignup}>submit</Button>{' '}
            <Button color="secondary" onClick={this.props.toggleSignup}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Signup;
