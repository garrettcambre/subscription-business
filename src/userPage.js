import React, { Component } from 'react';
import Navbar from './navbar';
import { Progress } from 'reactstrap';

class UserPage extends Component{
render(){
  return(
    <div>
         <Navbar/>
         <h1> Hello, {this.props.userInfo.usersName}</h1>
         <h3>your account balance is: ${this.props.userInfo.accountBalance}</h3>
         <div>
           <div className="text-center">
            {parseFloat(this.props.userInfo.accountBalance)} of {parseFloat(this.props.userInfo.maxBalance)}
            </div>
           <Progress value={this.props.userInfo.accountBalance} max={this.props.userInfo.maxBalance} />
         </div>
    </div>

  );
}
}

export default UserPage;
