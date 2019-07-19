import React, { Component } from 'react';
import Message from './Message.js';

class MessageList extends Component {
  render() {
    return (
      <div id="message-panel" className="message-panel">
        {this.props.messages.map((message, index) => {
          return (
            <Message key={index} name={message.name} message={message.message}/>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
