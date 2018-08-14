import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import * as firebase from 'firebase';


class RequestButton extends Component{
  constructor(props){
    super(props)
    this.state={
       modal:false,
       data:''

      };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
  this.setState({
    modal: !this.state.modal
    });
  };

render(){
  return(
    <div>
      <Button onClick={this.toggle}>Request Service</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Service Request</ModalHeader>
        <ModalBody>
            <h1>{this.state.data}</h1>
            <h1>sorry, this site is under construction and this feature is still unavailable :(</h1>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>okay</Button>          
        </ModalFooter>
      </Modal>
    </div>
  )
};
}
export default RequestButton;
