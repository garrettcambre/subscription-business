import React, { Component } from 'react';
import NavClass from './navbar';
import RequestScroll from './requestScroll';
import {firebase}  from './index';

var doot;

class ContractorPage extends Component{
  constructor(props){
    super(props);
    this.state={
      recentRequests: [],

    }
    doot=this
  }
componentWillMount(){
  var recentRequestsRef = firebase.database().ref('requests')
  .limitToLast(4)
    recentRequestsRef.on('value', snapshot => {

      doot.setState({recentRequests: Object.values(snapshot.val()) });
  })



};
render(){
  return(
    <div>
         <NavClass/>
         <br/>
         <h1> Hello, {this.props.usersName}</h1>
         <br/>
         <br/>
         <h1>youre a contractor</h1>
         <br/>
         <br/>
         <h4> here are the latest requests for service</h4>
         <RequestScroll recentRequests={this.props.recentRequests}/>

    </div>

  );
}
}

export default ContractorPage;
