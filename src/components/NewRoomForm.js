import React, { Component } from 'react';

class NewRoomForm extends Component {
  render() {
    return (
      <div className="form">
        <input onChange={this.props.updateRoomVal} value={this.props.roomVal} placeholder="Create a room" className="create-a-room"></input>
        <i className="fas fa-plus" onClick={this.props.makeRoom}></i>
      </div>
    );
  }
}

export default NewRoomForm;
