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
      <Button onClick={this.toggle}>button</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
            <h1>{this.state.data}</h1>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>Submit Request</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
};
}
export default RequestButton;
