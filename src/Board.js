import React, { Component } from 'react'

import Box from './Box'

import './Board.css'

class Board extends Component {
  
    renderBox(i) {
      return <Box id={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div id="head">
            <div className="headText">Game</div>
          </div>
          <div id="board">
            {this.renderBox(0)}
            {this.renderBox(1)}
            {this.renderBox(2)}
            {this.renderBox(3)}
            {this.renderBox(4)}
            {this.renderBox(5)}
            {this.renderBox(6)}
            {this.renderBox(7)}
            {this.renderBox(8)}
          </div>
        </div>
      );
    }
  }

  export default Board