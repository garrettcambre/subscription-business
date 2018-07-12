import React, { Component } from 'react';
import Navbar from './navbar';
import { Progress } from 'reactstrap';

class UserPage extends Component{
render(){
  return(
    <div>
         <Navbar/>
         <h1> Hello, {this.props.usersName}</h1>
         <h3>your account balance is: ${this.props.accountBalance}</h3>
         <div>
           <div className="text-center">
            {parseFloat(this.props.accountBalance)} of {parseFloat(this.props.maxBalance)}
            <button onClick={this.props.decrementMaxBalance}>-</button>
            <button onClick={this.props.incrementMaxBalance}>+</button>
            </div>
           <Progress value={this.props.accountBalance} max={this.props.maxBalance} />
         </div>

    </div>

  );
}
}

export default UserPage;
