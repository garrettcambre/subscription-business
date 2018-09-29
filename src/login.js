import React, { Component } from 'react';
import AdminPage from './adminPage';
import UserPage from './userPage';
import ContractorPage from './contractorPage';
import Home from './home';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Signup from './signup';
import {firebase}  from './index';

var doot;
var frbsUid;
var maxBalanceRef;
var frbsUser;
var auth;
var frbsEmail
var addressRef
var numberRef


var getPaddedDate = function(){
  var now = new Date();
    let getPaddedDay = function(){
      let day = now.getDate();
      if(day < 10){
        return "0"+JSON.stringify(day)
      }else{
        return JSON.stringify(day)
      }
    };

    let getPaddedMonth = function(){
      let adjMonth = now.getMonth() +1;
      if(adjMonth < 10){
        return  "0"+JSON.stringify(adjMonth)
      } else{
        return JSON.stringify(adjMonth)
      }
    };

    let year = function(){
      return JSON.stringify(now.getFullYear())
    };

    doot.setState({
      today: year()+'-'+getPaddedMonth()+'-'+getPaddedDay()
    })
    return  year()+'-'+getPaddedMonth()+'-'+getPaddedDay()
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {// ONCHANGE if anything is added make sure to add it to signout setstate call
      //controlled by user input in signup
      signupModal:false,
      inputEmail:'contractor1@gmail.com' ,//handles login as well
      inputPassword:'letmein',//handles login as well
      inputName:'',
      inputAddress:'',
      inputNumber:'',
      //control the auth state outside of firebase.auth()
      isUserLoggedIn: false,
      isAdminLoggedIn: false,
      isContractorLoggedIn: false,
      //handle the mutation max acct balance in userpage
      accountBalance: '',
      maxBalance: '',
      usersName: '',
      //loginModal
      modal: false,
      //request button
      requestModal:false,
      requestDate: '',
      requestDropdownValue:.5,
      usersNumber:'',
      today:'',
      usersAddress:'',
      //contractor page
      recentRequests:[],

    };
    this.handleSubmit = this.handleSubmit.bind(this);//these can all be set to doot in a cleanup day(i think, some scope may be slightly different),
    this.handleEmailChange = this.handleEmailChange.bind(this);// see lines 109-112 for an example
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.incrementMaxBalance = this.incrementMaxBalance.bind(this);
    this.decrementMaxBalance = this.decrementMaxBalance.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    doot=this;

  }

    toggle() {
    this.setState({
      loginModal: !this.state.loginModal
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
      var adminRef
      var contractorRef
      var addressRef
      var numberRef
      auth = firebase.auth();

      auth.signInWithEmailAndPassword(email, password).then(function(frbsUser) {
             // Success
             frbsUser = auth.currentUser

             firebase.auth().onAuthStateChanged(function(frbsUser) {
                if (frbsUser) {
                  frbsUid = frbsUser.uid
                  console.log(frbsUid)

                  maxBalanceRef = firebase.database().ref('users/' + frbsUid + '/maxBalance')
                   maxBalanceRef.on('value', function(snapshot) {
                     doot.setState({
                       maxBalance: snapshot.val()
                     })
                     return snapshot.val()
                   })
                   addressRef = firebase.database().ref('users/' + frbsUid + '/address')//used for requests
                    addressRef.on('value', function(snapshot) {
                      doot.setState({
                        usersAddress: snapshot.val()
                      })
                      return snapshot.val()
                    })
                    numberRef = firebase.database().ref('users/' + frbsUid + '/number')//used for requests
                     numberRef.on('value', function(snapshot) {
                       doot.setState({
                         usersNumber: snapshot.val()
                       })
                       return snapshot.val()
                     })


                   nameRef = firebase.database().ref('users/' + frbsUid + '/name')
                    nameRef.on('value', function(snapshot) {
                      doot.setState({
                        usersName: snapshot.val()
                      })
                    })

                   accountBalanceRef = firebase.database().ref('users/' + frbsUid + '/accountBalance')
                    accountBalanceRef.on('value', function(snapshot) {
                      doot.setState({
                        accountBalance: snapshot.val()
                      })
                    })

                  adminRef = firebase.database().ref('users/' + frbsUid + '/isAdmin')
                   adminRef.on('value', function(snapshot) {
                     doot.setState({
                       isAdminLoggedIn: snapshot.val()
                     })
                   })

                   contractorRef = firebase.database().ref('users/' + frbsUid + '/isContractor')
                    contractorRef.on('value', function(snapshot) {
                      console.log(snapshot.val())
                      doot.setState({
                        isContractorLoggedIn: snapshot.val()
                      })
                    })

                    if (doot.state.isAdminLoggedIn || doot.state.isContractorLoggedIn){
                      doot.setState({
                        loginModal: !doot.state.loginModal,
                      })
                    }else{
                      doot.setState({
                        loginModal: !doot.state.loginModal,
                        isUserLoggedIn: true,
                      })
                    }
                } else {
                  console.log('user isnt signed in from handlesubmit')
                }
              });
         }).catch(function(error) {
        //  var errorCode = error.code;  this is automatically part of firebase finction, I have not used it yet
        //  var errorMessage = error.message;

        });
      }

    signout(){
      firebase.auth().signOut().then(function() {
        console.log('user signed out')
      }).catch(function(error) {
        console.log('user not signed out')
      });
      doot.setState({
        signupModal:false, //full application state cleared
        inputEmail:'' ,
        inputPassword:'',
        inputName:'',
        inputAddress:'',
        inputNumber:'',
        isUserLoggedIn: false,
        isAdminLoggedIn: false,
        isContractorLoggedIn: false,
        accountBalance: '',
        maxBalance: '',
        usersName: '',
        modal: false,
        requestModal:false,
        requestDate: '',
        requestDropdownValue:.5,
        usersNumber:'',
        today:'',
        usersAddress:'',
        recentRequests:'',


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
        //    var errorCode = error.code;
        //    var errorMessage = error.message;
          });

          auth.onAuthStateChanged(function(frbsUser) {
              if (frbsUser) {

                frbsEmail = frbsUser.email;
                frbsUid = frbsUser.uid;
                console.log(frbsUid)


                var writeNewUser = function(uid, name, email, address, number) {
                  // binding to hold all of the initailly gathered user data bindings
                  let now = new Date()
                  var userData = {
                    name: name,
                    email: frbsEmail,
                    address: address,
                    number: number,
                    accountBalance: defaultAccountBalance,
                    maxBalance: defaultMaxBalance,
                    uid: frbsUid,
                    isAdmin: false,
                    isContractor: false,
                    added: now
                  };
                  //updates is an object that can hold more than one KV pair set
                  var updates = {};

                  updates['users/' + frbsUid] = userData;
                  return firebase.database().ref().update(updates);
                };
                writeNewUser(frbsUid, name, email, address, number);

                addressRef = firebase.database().ref('users/' + frbsUid + '/address')//used for requests
                 addressRef.on('value', function(snapshot) {
                   doot.setState({
                     usersAddress: snapshot.val()
                   })
                   return snapshot.val()
                 })
                 numberRef = firebase.database().ref('users/' + frbsUid + '/number')//used for requests
                  numberRef.on('value', function(snapshot) {
                    doot.setState({
                      usersNumber: snapshot.val()
                    })
                    return snapshot.val()
                  })
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
      console.log('increment')
      console.log(frbsUid)
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
    };

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

    //request button functions

    requestToggle(){
      doot.setState({
        requestModal: !doot.state.requestModal
      });
    };

    requestSubmit(){
      var requestUid
      var userRequestData
      var requestData
      var updateRequests
      var now = new Date()
      auth = firebase.auth();
      frbsUser = auth.currentUser;
      frbsUid = frbsUser.uid
      frbsEmail = frbsUser.email;

      //firebase database update in both requests and individuals request list
        var writeNewRequest = function() {

          requestUid = firebase.database().ref().child('requests').push().key;
          // binding to hold all of the initailly gathered user data bindings

          userRequestData = {
            name: doot.state.usersName,
            email: frbsEmail,
            address: doot.state.usersAddress,//set inside login function
            number: doot.state.usersNumber,//set inside login function
            requestSubmittedAt: now,
            userUid: frbsUid,
            requestUid: requestUid,
            requestDate:doot.state.requestDate,
            requestHours:doot.state.requestDropdownValue,
          };

          requestData = {
            requestUid: requestUid,
            requestSubmittedAt: now,
            requestDate:doot.state.requestDate,
            requestHours:doot.state.requestDropdownValue,
          };

          updateRequests = {};

          updateRequests['/requests/'+ requestUid] = userRequestData;
          updateRequests['/users/'+ frbsUid + '/requestsHistory/' + requestUid] = requestData;

          firebase.database().ref().update(updateRequests)
          alert('request submitted!')
        };

      writeNewRequest();

      doot.setState({
        requestModal:false
      });
    };

    requestDateChange(e){
      doot.setState({
        requestDate: e.target.value,
      })
    };

    handleRequestDropdown(){ //use a closure as a better syntax, a function that returns a function
      return(e)=>{
        this.setState({
          requestDropdownValue: e.target.value
        })
        }

    };


  componentWillMount(){
      getPaddedDate()

//for requestscroll contracrtors
  const recentRequestsRef = firebase.database().ref('requests/').limitToLast(3)
     recentRequestsRef.on('value', function(snapshot) {
       doot.setState({
         recentRequests: Object.values(snapshot.val())
       })
       return snapshot.val()
     })



}
//login componentDidMount
componentDidMount(){
  firebase.auth().signOut(); // this could be a serious issue, checkinto it

  setTimeout(function(){//promises are better than timeouts


//console.log(Object.values(doot.state.recentRequests[0].object)[0].number)//can call [index].attributekey

  },1000)



}

  render(){
      if (!this.state.isAdminLoggedIn && !this.state.isUserLoggedIn && !this.state.isContractorLoggedIn){
      return (
        <div>
        <div>
          <div className= "authButtons">
            <span className="loginButton">
              <Button color="danger"  onClick={this.toggle}>Login</Button>
            </span>

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
            </div>
          <Modal isOpen={this.state.loginModal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Login</ModalHeader>
            <ModalBody>
                <div className='UserLogin'>
                  <form  >
                    <p>email</p>
                    <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                    <br/>
                    <br/>
                    <br/>
                    <p>password</p>
                    <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
                    <br/><br/>
                  </form>
                </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>submit</Button>{' '}
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

            <button onClick={this.signout}>signout</button>

            <br/>
              <AdminPage isAdminLoggedIn={this.state.isAdminLoggedIn}/>
          </div>
        );
    }else if(this.state.isContractorLoggedIn){
        return (
          <div>

            <button onClick={this.signout}>signout</button>

            <br/>
              <ContractorPage
              isContractorLoggedIn={this.state.isContractorLoggedIn}
              recentRequests={this.state.recentRequests}/>
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
              requestModal={this.state.requestModal}
              requestToggle={this.requestToggle}
              requestDate={this.state.requestDate}
              requestSubmit={this.requestSubmit}
              requestDateChange={this.requestDateChange}
              today={this.state.today}
              handleRequestDropdown={this.handleRequestDropdown}

              />
        </div>
      );
    }
  }
};

export default Login;
