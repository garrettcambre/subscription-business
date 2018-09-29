import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




class RequestButton extends Component{
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


render(){
  return(
    <div>
      <Button onClick={this.props.requestToggle}>Request Service</Button>
      <Modal isOpen={this.props.requestModal} toggle={this.props.requestToggle} className={this.props.className}>
        <ModalHeader toggle={this.props.requestToggle}>Service Request</ModalHeader>
        <ModalBody>
          <h2> I would like to request </h2>
            <form>
              <select onChange={this.props.handleRequestDropdown()}>
                <option value={.5}> 1/2</option>
                <option value={1}> 1</option>
                <option value={2}> 2</option>
                <option value={3}> 3</option>
              </select>
            </form>

          <h2>hour(s) of work on</h2>


          <form>
            <input type="date"
             value={this.props.requestDate}
             onChange={this.props.requestDateChange}
             min={this.props.today}

             />




          </form>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.requestSubmit}>submit</Button>
          <Button color="secondary" onClick={this.props.requestToggle}>cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
};
export default RequestButton;
