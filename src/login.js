import React, { Component } from 'react';


class Login extends Component{
  render(){
    return(
      <form>
        <label>
        login
        <input type='text' />
        </label>
        <input type="submit"/>
      </form>
    );
  }
}
export default Login;
