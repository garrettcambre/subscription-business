import React, { Component } from 'react';
import NavClass from './navbar';
import { Progress } from 'reactstrap';
import RequestButton from './requestButton'

class UserPage extends Component{
  constructor(props){
    super(props);
    this.state={




    }
  }

render(){
  return(
    <div>
         <NavClass/>
         <br/>
         <h1> Hello, {this.props.usersName}</h1>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <h3>your account balance is: ${this.props.accountBalance}</h3>
         <h4> your maximum account balance is ${this.props.maxBalance}</h4>
         <div>
           <div className="text-center">
           <RequestButton userIndex={this.props.userIndex}/>
            <br/>
             <br/>
             <br/>
            {parseFloat(this.props.accountBalance)} of {parseFloat(this.props.maxBalance)}
            <button onClick={this.props.decrementMaxBalance}>-</button>
            <button onClick={this.props.incrementMaxBalance}>+</button>
            </div>
            <br/>
           <Progress value={this.props.accountBalance} max={this.props.maxBalance} />
         </div>

    </div>

  );
}
}

export default UserPage;
