import React, { Component } from 'react';
import NavClass from './navbar';


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

    </div>

  );
}
}

export default ContractorPage;
