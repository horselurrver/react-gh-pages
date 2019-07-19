import React, { Component } from 'react';

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textVal: '',
    }
  }

  render() {
    return (
      <div className="send">
        <textarea
        id="text-area"
        onKeyPress={this.props.submit}
        placeholder="Type message & hit enter"
        value={this.props.textVal}
        onChange={this.props.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default SendMessage;
