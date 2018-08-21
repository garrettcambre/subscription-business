import React, { Component } from 'react';
import NavClass from './navbar';
import { Progress } from 'reactstrap';
import RequestButton from './requestButton'

var recentPostsRef = firebase.database().ref('posts').limitToLast(100);

class UserPage extends Component{
  constructor(props){
    super(props);
    this.state={




    }
  }




render(){
  return(
    <div>

    </div>

  );
}
}

export default UserPage;
