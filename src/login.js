import React, { Component } from 'react';
import AdminPage from './adminPage';
import UserPage from './userPage';
import Home from './home';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      inputPassword:'',
      isUserLoggedIn: false,
      isAdminLoggedIn: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }


    handleSubmit(e){
      console.log('submitted');
      e.preventDefault();
      let userQuery = (objectArray, state) => {
       let i;
       for(i=0; i<objectArray.length; i++){
         if(objectArray[i].email === state.inputEmail && objectArray[i].password === state.inputPassword){
         return this.setState({isUserLoggedIn:true, isAdminLoggedIn:false});
        } else if('garrett.cambre@gmail.com' === state.inputEmail && "imTheAdmin" === state.inputPassword ){
         return this.setState({isUserLoggedIn:false, isAdminLoggedIn:true})
        } else{
         console.log('your email or password is incorrect')
        }
       }
     }
      userQuery(userList, this.state);
    };
    handleEmailChange(e){
      this.setState({inputEmail: e.target.value});
    };
    handlePasswordChange(e){
      this.setState({inputPassword: e.target.value});
    };
  render(){
      if (!this.state.isAdminLoggedIn && !this.state.isUserLoggedIn){
      return (
        <div>
            <div className='UserLogin'>
              <form  >
                <p>email</p>
                <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                <br/>
                <p>password</p>
                <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
                <br/><br/>
                <input onClick={this.handleSubmit} type="submit" value="submit"/>
              </form>
            </div>
          <br/>
          <Home/>
        </div>
      );
    }else if(this.state.isAdminLoggedIn){
        return (
          <div>
            <div className='UserLogin'>
              <form  >
                <p>email</p>
                <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
                <br/>
                <p>password</p>
                <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
                <br/><br/>
                <input onClick={this.handleSubmit} type="submit" value="submit"/>
              </form>
            </div>
            <br/>
              <AdminPage isAdminLoggedIn={this.state.isAdminLoggedIn}/>
          </div>
        );
    }else{
      return (
        <div>
          <div className='UserLogin'>
            <form  >
              <p>email</p>
              <input type='text'  onChange={this.handleEmailChange} value={this.state.inputEmail}/>
              <br/>
              <p>password</p>
              <input type= 'text' onChange={this.handlePasswordChange} value={this.state.inputPassword}/>
              <br/><br/>
              <input onClick={this.handleSubmit} type="submit" value="submit"/>
            </form>
          </div>
          <br/>
            <UserPage/>
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
    "balance": "$497.00",
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
    "balance": "$311.22",
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
    "balance": "$459.72",
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
