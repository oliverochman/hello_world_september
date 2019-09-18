import React, { Component } from 'react';
import Message from './Message';
import ButtonMessage from './ButtonMessage';

class App extends Component {
  state = {
    message: 'Hello Craft Academy',
    renderButtonMessage: false
  }

  inputHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  renderButtonMessage = () => {
    if (this.state.renderButtonMessage == true) {
      this.setState({
        renderButtonMessage: false
      })
    } else {
      this.setState({
        renderButtonMessage: true
      })
    }
    
  }

  render() {
    let buttonMessage;
    
    if (this.state.renderButtonMessage == true) {
      buttonMessage = (
        <>
          <ButtonMessage />
          <button onClick={this.renderButtonMessage}>Click me to remove this message</button>
        </>
      )
    } else {
      buttonMessage = (
        <button onClick={this.renderButtonMessage}>Click me for a button message</button>
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

        {buttonMessage}

      </div>
    );
  }
}

export default App;
