import React, { Component } from 'react';
import NavClass from './navbar';
import RequestScroll from './requestScroll';

class ContractorPage extends Component{
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
         <h1>youre a contractor</h1>
         <RequestScroll />

    </div>

  );
}
}

export default ContractorPage;
