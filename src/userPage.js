import React, { Component } from 'react';
import NavClass from './navbar';
import { Progress } from 'reactstrap';
import RequestButton from './requestButton';


var doot;

class UserPage extends Component{
  constructor(props){
    super(props);
    this.state={
      requestDate:'',

      requestDropdownValue:'',
    }
    doot=this;
  }

componentDidMount(){

};

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
           <RequestButton
                newRequest={this.props.newRequest}
                requestModal={this.props.requestModal}
                requestToggle={this.props.requestToggle}
                requestDateChange={this.props.requestDateChange}
                requestDate={this.props.requestDate}
                handleRequestDropdown={this.props.handleRequestDropdown}
                requestSubmit={this.props.requestSubmit}
                getPaddedDate={this.props.getPaddedDate}
                today={doot.props.today}
                />
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
