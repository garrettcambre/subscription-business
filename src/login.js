import React, { Component } from 'react';
import AdminPage from './adminPage';
import UserPage from './userPage';
import Home from './home';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Signup from './signup';
import * as firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: 'garrett.cambre@gmail.com',
      inputPassword:'letmein',
      inputName:'',
      inputAddress:'',
      inputNumber:'',
      isUserLoggedIn: false,
      isAdminLoggedIn: false,
      modal: false,
      accountBalance: '',
      maxBalance: '',
      usersName: '',
      usersIndex: '',
      signupModal:false,

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.incrementMaxBalance = this.incrementMaxBalance.bind(this);
    this.decrementMaxBalance = this.decrementMaxBalance.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

    toggle() {
    this.setState({
      modal: !this.state.modal
    });
    }
    handleEmailChange(e){
      this.setState({inputEmail: e.target.value});
    };

    handlePasswordChange(e){
      this.setState({inputPassword: e.target.value});
    };


    handleSubmit(e){
      var currentUser = firebase.auth().currentUser;
      var name;
      e.preventDefault();
      let email = this.state.inputEmail;
      let password = this.state.inputPassword;
      let auth = firebase.auth();

      auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

      if (currentUser) {
        console.log(currentUser);
      }

      this.setState({
        modal: !this.state.modal
      })
    };

    signout(){
      firebase.auth().signOut().then(function() {
        console.log('user signed out')
      }).catch(function(error) {
        console.log('user not signed out')
      });
    }

    // after this point these functions are called in child components through props
    handleNameChange(e){
      this.setState({inputName: e.target.value});
    };
    handleAddressChange(e){
      this.setState({inputAddress: e.target.value});
    };
    handleNumberChange(e){
      this.setState({inputNumber: e.target.value});
    };
    toggleSignup(){
      this.setState({
        signupModal: !this.state.signupModal
      })
    };

    handleSignup(){
          var email = this.state.inputEmail;
          var password = this.state.inputPassword;
          var auth = firebase.auth();
          var name = this.state.inputName;
          var address = this.state.inputAddress;
          var number = this.state.inputNumber;
          var defaultMaxBalance = 300;
          var frbsUser = firebase.auth().currentUser;

          auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          });

          firebase.auth().onAuthStateChanged(function(frbsUser) {
              if (frbsUser) {

                var frbsEmail = firebase.auth().currentUser.email;
                var frbsUid = firebase.auth().currentUser.uid;
                var frbsName = firebase.auth().currentUser.userName;

                var writeNewUser = function(uid, name, email, address, number) {
                  // binding to hold all of the initailly gathered user data bindings
                  var userData = {
                    name: name,
                    email: frbsEmail,
                    address: address,
                    number: number,
                    maxBalance: defaultMaxBalance,
                    uid: frbsUid
                  };
                  //updates is an object that can hold more than one KV pair set
                  var updates = {};

                  updates['users/' + frbsUid] = userData;
                  return firebase.database().ref().update(updates);
                };
                writeNewUser(frbsUid, name, email, address, number);
              } else {

              }
            });

          this.setState({
            signupModal: !this.state.signupModal
          });
    };




    incrementMaxBalance(){
      let search=(objectArray )=>{
      let i;
      for(i=0; i<objectArray.length; i++){
        if(objectArray[i].email === this.state.inputEmail)
        objectArray[i].maxBalance += 10
        return   this.setState({maxBalance: userList[i].maxBalance})
      }
    }
    search(userList);
    };

    decrementMaxBalance(){
      let search=(objectArray, value=10 )=>{
      let i;
      for(i=0; i<objectArray.length; i++){
        if(objectArray[i].email === this.state.inputEmail)
        objectArray[i].maxBalance -= value
        return   this.setState({maxBalance: userList[i].maxBalance})
      }
    }
    search(userList);
    };



  render(){
      if (!this.state.isAdminLoggedIn && !this.state.isUserLoggedIn){
      return (
        <div>
        <div>
          <Button color="danger" onClick={this.toggle}>Login</Button>
          <Signup
              handleEmailChange={this.handleEmailChange}
              handlePasswordChange={this.handlePasswordChange}
              handleAddressChange={this.handleAddressChange}
              handleNameChange={this.handleNameChange}
              handleNumberChange={this.handleNumberChange}
              inputName={this.state.inputName}
              inputEmail={this.state.inputEmail}
              inputNumber={this.state.inputNumber}
              inputAddress={this.state.inputAddress}
              inputPassword={this.state.inputPassword}
              handleSignup={this.handleSignup}
              toggleSignup={this.toggleSignup}
              signupModal={this.state.signupModal}
          />

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
                <div className='UserLogin'>
                  <form  >
                    <p>email</p>
                    <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                    <br/>
                    <p>password</p>
                    <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
                    <br/><br/>
                  </form>
                </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>


        </div>

          <br/>
          <button onClick={this.signout}>signout</button>
          <Home/>
        </div>
      );
    }else if(this.state.isAdminLoggedIn){
        return (
          <div>
            <div>
              <Button color="danger" onClick={this.toggle}>Login</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div className='UserLogin'>
                      <form  >
                        <p>email</p>
                        <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                        <br/>
                        <p>password</p>
                        <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
                        <br/><br/>
                      </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.handleSubmit}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>

            <br/>
              <AdminPage isAdminLoggedIn={this.state.isAdminLoggedIn}/>
          </div>
        );
    }else{
      return (
        <div>
            <div>
              <Button color="danger" onClick={this.toggle}>Login</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div className='UserLogin'>
                      <form  >
                        <p>email</p>
                        <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                        <br/>
                        <p>password</p>
                        <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
                        <br/><br/>
                      </form>
                    </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary"  onClick={this.handleSubmit}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          <br/>
            <UserPage
              accountBalance={this.state.accountBalance}
              usersName={this.state.usersName}
              maxBalance={this.state.maxBalance}
              incrementMaxBalance={this.incrementMaxBalance}
              decrementMaxBalance={this.decrementMaxBalance}
              userIndex={this.state.userIndex}/>
        </div>
      );
    }
  }
};


let userList = [
  {
    "_id": "5b3e5eb4c37e380e7a73ee93",
    "index": 0,
    "guid": "d873815c-011b-4778-8ce6-edc20a924aa5",
    "isActive": false,
    "balance": 157.56,
    "maxBalance":500,
    "picture": "http://placehold.it/32x32",
    "age": 50,
    "name": "Bridgett Hampton",
    "gender": "female",
    "email": "bridgetthampton@quinex.com",
    "password": "non",
    "phone": "+1 (829) 412-2012",
    "address": "872 Clay Street, Cincinnati, Ohio, 20681",
    "registered": "04-21-2014 T04:51:22 +04:00"
  },
  {
    "_id": "5b3e5eb4e93fbcd63a69b655",
    "index": 1,
    "guid": "511d18bf-d229-4f37-b641-78bba0e3a6f1",
    "isActive": false,
    "balance": 311.22,
    "maxBalance":500,
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Angelia Hartman",
    "gender": "female",
    "email": "angeliahartman@quinex.com",
    "password": "dolore",
    "phone": "+1 (862) 446-3205",
    "address": "158 Newkirk Avenue, Cincinnati, Ohio, 46064",
    "registered": "05-25-2018 T09:41:55 +04:00"
  },
  {
    "_id": "5b3e5eb47a62f9e71efc40f7",
    "index": 2,
    "guid": "c04efc6d-4bc0-440b-ac33-1b5b5d4a3461",
    "isActive": false,
    "balance": 255.67,
    "maxBalance":500,
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "name": "Josephine Meyers",
    "gender": "female",
    "email": "josephinemeyers@quinex.com",
    "password": "id",
    "phone": "+1 (927) 464-2235",
    "address": "239 Ridgecrest Terrace, Cincinnati, Ohio, 58364",
    "registered": "09-29-2017 T06:36:35 +04:00"
  }
]



export default Login;
