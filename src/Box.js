import React, { Component } from 'react'

import './Box.css'



class Box extends Component {

  render() {
    return (
      <div className="box" id={this.props.id} data-box={this.props.id}>
      {/* (this.target.innerHTML = undefined) ? this.userGo: this.non */}
      </div>
    );
  }
}

  export default Box