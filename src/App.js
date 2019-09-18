import React, { Component } from 'react';
import Message from './Message';
import LoginForm from './LoginForm';

class App extends Component {
  state = {
    message: 'Hello Craft Academy',
    renderLoginForm: false
  }

  inputHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  renderLoginForm = () => {
    if (this.state.renderLoginForm == true) {
      this.setState({
        renderLoginForm: false
      })
    } else {
      this.setState({
        renderLoginForm: true
      })
    }
    
  }

  render() {
    let loginForm;

    if (this.state.renderLoginForm == true) {
      loginForm = (
        <>
          <LoginForm
            message={this.state.message} 
          />
          <button onClick={this.renderLoginForm}>Close Login Form </button>
        </>
      )
    } else {
      loginForm = (
        <button onClick={this.renderLoginForm}>Login</button>
      )
    }

    return (
      <div>
        <Message
          message={this.state.message} 
        />
        <input 
          onBlur={this.inputHandler}
        />

        {loginForm}
      </div>
    );
  }
}

export default App;
