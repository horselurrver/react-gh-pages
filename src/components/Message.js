import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <p className="sender">{this.props.name}</p>
        <p className="message">{this.props.message}</p>
      </div>
    );
  }
}

export default Message;
