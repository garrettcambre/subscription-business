import React, { Component } from 'react';
import NavClass from './navbar';
import RequestScroll from './requestScroll';

var i



var doot

class ContractorPage extends Component{
  constructor(props){
    super(props);
    this.state={
      0:'',
      1:'',
      2:'',
      3:'',
      4:'',
      5:'',
      6:'',
      7:'',
      8:'',
    }
    doot=this
  }
componentWillMount(){
    for(i=0; i<this.props.recentRequests[0].length; i++){
      var stateObject= { i: this.props.recentRequests[0]}
      doot.setState({
        stateObject
      });
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
         <h1>youre a contractor</h1>
         <RequestScroll />
         <br/>
         <br/>
         <h4> here are the latest requests for service</h4>
         <p>{this.props.recentRequests[0].name}</p>

    </div>

  );
}
}

export default ContractorPage;
