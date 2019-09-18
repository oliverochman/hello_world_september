import React, { Component } from 'react';
import Message from './Message';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    authenticated: false
  }
  
  inputHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  loginUser() {
    if (this.state.username == 'anna_admin' && this.state.password == 'api_kitten') {
      this.setState({
        authenticated: true,
        loginMessage: 'Authenticated successfully'
      })
    } else {
      this.setState({
        loginMessage: 'Wrong password or username'
      })
    }
  }

  render() {
    let loginMessage

    if (this.state.loginMessage) {
      loginMessage = (
        <Message
          message={this.state.loginMessage}
        />
      )
    }

    return (
      <div> 
        <input id="username" placeholder="Username" onBlur={this.inputHandler} />
        <input id="password" placeholder="Password" type="password" onBlur={this.inputHandler} />
        <button onClick={this.loginUser.bind(this)}> Authenticate me</button>

        {loginMessage}
      </div>
    );
  }
}

export default LoginForm;
