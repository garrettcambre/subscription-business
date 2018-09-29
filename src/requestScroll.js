import React, { Component } from 'react';
import {firebase}  from './index';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

let doot

class RequestScroll extends Component{
  constructor(props){
    super(props);
    this.state={

    }
        doot=this
  }

componentWillMount( ){



}
render(){
console.log(this.props.recentRequests)

const loop=function(){
  let i
  for (i=0; i<doot.props.recentRequests.length; i++){

}

const test = function(index) {
    <div>
      <Card>
        <CardBody>
          <CardTitle>{doot.props.recentRequests[index].name} requested</CardTitle>
          <CardText>{doot.props.recentRequests[index].requestHours} Hour(s)
                     on {doot.props.recentRequests[index].requestDate}
                     at {doot.props.recentRequests[index].address}
          </CardText>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    console.log(index)
    console.log(doot.props.recentRequests[index].name)
    }
  }









  return(
    <div>
      {test}
    </div>

  );
}
}

export default RequestScroll;
