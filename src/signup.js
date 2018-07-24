import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Signup extends Component{
constructor(props){
  super(props)
  this.state={
    modal:false,
    inputEmail: '',
    inputPassword:'',
    inputName:'',
    inputAddress:'',
    inputNumber:'',
    errorCode:'',
    errorMessage:''
  }
  this.toggle = this.toggle.bind(this);
  this.handleSignup = this.handleSignup.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleNumberChange = this.handleNumberChange.bind(this);
  this.handleAddressChange = this.handleAddressChange.bind(this);

}
toggle(){
  this.setState({
    modal: !this.state.modal
  })
};
//1 these could be handled above through upper state easily
handleEmailChange(e){
  this.setState({inputEmail: e.target.value});
};
handlePasswordChange(e){
  this.setState({inputPassword: e.target.value});
};
handleNameChange(e){
  this.setState({inputName: e.target.value});
};
handleAddressChange(e){
  this.setState({inputAddress: e.target.value});
};
handleNumberChange(e){
  this.setState({inputNumber: e.target.value});
};
//1


handleSignup(){
    let auth = firebase.auth();
    let email = this.state.inputEmail;//tied to 1
    let password = this.state.inputPassword;
    let name = this.state.inputName;
    let address = this.state.inputAddress;
    let number = this.state.inputNumber;//1
    var frbsUser = firebase.auth().currentUser;
    let frbsEmail = firebase.auth().currentUser.email;
    let frbsUid = firebase.auth().currentUser.uid;
    let frbsName = firebase.auth().currentUser.userName;

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

    });

    this.setState({
      modal: !this.state.modal
    });

    
    function writeNewUser(uid, name, email, address, number) {
      // binding to hold all of the initailly gathered user data bindings
      var userData = {
        name: name,
        email: frbsEmail,
        address: address,
        number: number,
        uid: frbsUid
      };
      //updates is an object that can hold more than one KV pair set
      var updates = {};
      updates['users/' + frbsUid] = userData;
      return firebase.database().ref().update(updates);
    }
  writeNewUser(frbsUid, name, email, address, number);
};












  render(){
    return(
      <div>
        <Button color="primary" onClick={this.toggle}>Sign Up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              <div className='UserLogin'>
                <form  >
                  <p>Name</p>
                  <input type= 'text' onChange={this.handleNameChange} value={this.state.inputName}/>
                  <br/>
                  <p>email</p>
                  <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                  <br/>
                  <p>password</p>
                  <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
                  <br/>
                  <p>Address</p>
                  <input type= 'text' onChange={this.handleAddressChange} value={this.state.inputAddress}/>
                  <br/>
                  <p>Perferred Phone Number</p>
                  <input type= 'text' onChange={this.handleNumberChange} value={this.state.inputNumber}/>
                  <br/>
                  <p>{this.state.errorCode} {this.state.errorMessage}</p>
                  <br/>
                </form>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSignup}>submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Signup;
