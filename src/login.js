import React, { Component } from 'react';
import AdminPage from './adminPage';
import UserPage from './userPage';
import Home from './home';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Signup from './signup';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: 'bridgetthampton@quinex.com',
      inputPassword:'non',
      isUserLoggedIn: false,
      isAdminLoggedIn: false,
      modal: false,
      accountBalance: '',
      maxBalance: '',
      usersName: '',
      usersIndex: '',

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.incrementMaxBalance = this.incrementMaxBalance.bind(this);
    this.decrementMaxBalance = this.decrementMaxBalance.bind(this);
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
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    };
    // after this point these functions are called in child components through props
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
          <Signup/>

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
