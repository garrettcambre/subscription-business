import React, { Component } from 'react';
import AdminPage from './adminPage';
import UserPage from './userPage';
import Home from './home';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Signup from './signup';
import * as firebase from 'firebase';

var doot;
var frbsUid;
var maxBalanceRef;
var frbsUser;
var auth;
var maxBalanceRefB

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '1@gmail.com',
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
    this.handleSubmit = this.handleSubmit.bind(this);//these can all be set to doot in a cleanup day
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
    doot=this;

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
      e.preventDefault();
      let email = this.state.inputEmail;
      let password = this.state.inputPassword;
      var nameRef
      var accountBalanceRef
      auth = firebase.auth();

      auth.signInWithEmailAndPassword(email, password).then(function(frbsUser) {
             // Success
             frbsUser = auth.currentUser

             firebase.auth().onAuthStateChanged(function(frbsUser) {
                if (frbsUser) {
                  frbsUid = frbsUser.uid
                  console.log(frbsUid)

                  maxBalanceRef = firebase.database().ref('users/' + frbsUid + '/maxBalance'),
                   maxBalanceRef.on('value', function(snapshot) {
                     doot.setState({
                       maxBalance: snapshot.val()
                     })
                     return snapshot.val()
                   })
                   maxBalanceRefB = firebase.database().ref('users/' + frbsUid + '/maxBalance'),
                    maxBalanceRefB.on('value', function(snapshot) {
                      return snapshot.val()
                    })



                   nameRef = firebase.database().ref('users/' + frbsUid + '/name'),
                    nameRef.on('value', function(snapshot) {
                      doot.setState({
                        usersName: snapshot.val()
                      })
                    })

                   accountBalanceRef = firebase.database().ref('users/' + frbsUid + '/accountBalance'),
                    accountBalanceRef.on('value', function(snapshot) {
                      doot.setState({
                        accountBalance: snapshot.val()
                      })
                    })

                    doot.setState({
                      modal: !doot.state.modal,
                      isUserLoggedIn: true,
                    })

                } else {
                  console.log('user isnt signed in from handlesubmit')
                }
              });
         }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;

        });
      }

    signout(){
      firebase.auth().signOut().then(function() {
        console.log('user signed out')
      }).catch(function(error) {
        console.log('user not signed out')
      });
      doot.setState({
        isUserLoggedIn: false,
        isAdminLoggedIn: false,
      })
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
          auth = firebase.auth();
          frbsUser = auth.currentUser;
          var name = this.state.inputName;
          var address = this.state.inputAddress;
          var number = this.state.inputNumber;
          var defaultMaxBalance=300;
          var defaultAccountBalance= 10;

        auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          });

          auth.onAuthStateChanged(function(frbsUser) {
              if (frbsUser) {

                var frbsEmail = frbsUser.email;
                var frbsUid = frbsUser.uid;


                var writeNewUser = function(uid, name, email, address, number) {
                  // binding to hold all of the initailly gathered user data bindings
                  var userData = {
                    name: name,
                    email: frbsEmail,
                    address: address,
                    number: number,
                    accountBalance: defaultAccountBalance,
                    maxBalance: defaultMaxBalance,
                    uid: frbsUid
                  };
                  //updates is an object that can hold more than one KV pair set
                  var updates = {};

                  updates['users/' + frbsUid] = userData;
                  return firebase.database().ref().update(updates);
                };
                writeNewUser(frbsUid, name, email, address, number);


              }
            });

            this.setState({
              signupModal: !this.state.signupModal,
              isUserLoggedIn: true,
              maxBalance: defaultMaxBalance,
              usersName: this.state.inputName,
              accountBalance: defaultAccountBalance,
            });
    };




    incrementMaxBalance(){
      var foo;
      auth = firebase.auth();
      frbsUser = auth.currentUser
      frbsUid = frbsUser.uid
      let  readMaxBalance=()=>{
        firebase.database().ref('/users/' + frbsUid ).once('value').then(function(snapshot) {
          foo = snapshot.val().maxBalance;

          let bar = foo +=10;
          var newMaxBalance = {}
          newMaxBalance['/users/' + frbsUid + '/maxBalance']= bar

          doot.setState({
            maxBalance:  bar
          })
          firebase.database().ref().update(newMaxBalance);
          })
      }
      readMaxBalance();
    }

    decrementMaxBalance(){//this is copypasted from incrementmaxbalance but it is just sligntly chnged binding names and changed to subtract
      var fooLess;
      auth = firebase.auth();
      frbsUser = auth.currentUser
      frbsUid = frbsUser.uid
      let  readMaxBalance=()=>{
        firebase.database().ref('/users/' + frbsUid ).once('value').then(function(snapshot) {
          fooLess = snapshot.val().maxBalance;


          let barLess = fooLess -=10;
          var newMaxBalance = {}
          newMaxBalance['/users/' + frbsUid + '/maxBalance']= barLess

          doot.setState({
            maxBalance:  barLess
          })
          firebase.database().ref().update(newMaxBalance);
          })
      }
      readMaxBalance();

    };

componentDidMount(){
  firebase.auth().signOut();
}

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
              maxBalance={this.state.maxBalance}
              usersName={this.state.usersName}
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

            <button onClick={this.signout}>signout</button>

            <br/>
              <AdminPage isAdminLoggedIn={this.state.isAdminLoggedIn}/>
          </div>
        );
    }else{
      return (
        <div>
          <button onClick={this.signout}>signout</button>
          <br/>
            <UserPage
              accountBalance={this.state.accountBalance}
              usersName={this.state.usersName}
              maxBalance={this.state.maxBalance}
              incrementMaxBalance={this.incrementMaxBalance}
              decrementMaxBalance={this.decrementMaxBalance}
              userIndex={this.state.userIndex}
              />
        </div>
      );
    }
  }
};

export default Login;
