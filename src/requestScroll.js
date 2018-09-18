import React, { Component } from 'react';




class UserPage extends Component{
  constructor(props){
    super(props);
    this.state={
      recentRequests:'',



    }
  }

componentWillMount( ){



  /*recentRequestsRef = firebase.database().ref('requests').limitToLast(10);
  doot.setState({
    recentRequests: JSON.stringify(recentRequestsRef)
  })*/
}


render(){
  return(
    <div>


    </div>

  );
}
}

export default UserPage;
