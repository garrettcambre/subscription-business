import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Signup extends Component{
constructor(props){
  super(props)
  this.state={
  }
}

  render(){
    return(
      <span>
        <Button color="primary" onClick={this.props.toggleSignup}>Sign Up</Button>
        <Modal isOpen={this.props.signupModal} toggle={this.props.toggleSignup} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleSignup}>Signup</ModalHeader>
          <ModalBody>
              <div className='UserLogin'>
                <form  >
                  <p>Name</p>
                  <input type= 'text' onChange={this.props.handleNameChange} value={this.props.inputName}/>
                  <br/>
                  <br/>
                  <p>email</p>
                  <input type='text'  onChange={this.props.handleEmailChange} value={this.props.inputEmail}/>
                  <br/>
                  <br/>
                  <p>password</p>
                  <input type= 'text' onChange={this.props.handlePasswordChange} value={this.props.inputPassword}/>
                  <br/>
                  <br/>
                  <p>Address</p>
                  <input type= 'text' onChange={this.props.handleAddressChange} value={this.props.inputAddress}/>
                  <br/>
                  <br/>
                  <p>Perferred Phone Number</p>
                  <input type= 'text' onChange={this.props.handleNumberChange} value={this.props.inputNumber}/>
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
      </span>
    );
  }
}
export default Signup;
