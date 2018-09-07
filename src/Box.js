import React, { Component } from 'react'

import './Box.css'

class Box extends Component {
    render() {
      return (
        <div className="box" id={this.props.id}>
        </div>
      );
    }
  }

  export default Box