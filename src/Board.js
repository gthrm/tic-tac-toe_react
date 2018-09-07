import React, { Component } from 'react'

import Box from './Box.js'
import Constants from './Constants.js'

import './Board.css'

class Board extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      turn: Constants.X,
      gameEnded: false,
      winner: undefined
    }

    this.gameState = {
      board: Array(9).fill(''),
      totalMov: 0
    }
  }

  renderBox(i) {
    return <Box id={i} />;
  }

  clicked(event) {

    if (this.gameState.board[event.target.dataset.box] == '') {
      this.gameState.board[event.target.dataset.box] = this.gameState.turn == Constants.X ? 'X' : 'O' 
      event.target.innerHTML = this.state.turn;
      this.setState ({
        turn: this.state.turn == Constants.X ? Constants.O : Constants.X,
      })
    }

    let result = this.check()

    if (result == 'X') {
      this.setState({
        gameEnded: true,
        winner: 'X'
      })
      console.log('====================================');
      console.log('winner X');
      console.log('====================================');
    } else if (result == 'O') {
      this.setState({
        gameEnded: true,
        winner: 'O'
      })
      console.log('====================================');
      console.log('winner O');
      console.log('====================================');
    } else if (result == 'draw') {
      this.setState({
        gameEnded: true,
        winner: 'draw'
      })
    }
  }

  check() {
    let mov = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]]
    let board = this.gameState.board
    for (let i = 0; i<mov.length; i++) {
      
      if (board[mov[i][0]] == board[mov[i][1]] && board[mov[i][1]] == board[mov[i][2]]) {
        return board[mov[i][0]]
      }
      console.log(this.gameState.totalMov);
      
      if (this.gameState.totalMov == 9) {
        return 'draw'
      }

    }
  }

  render() {

    return (
      <div>
        <div id="head">
          <div className="headText">Выиграл {this.state.winner}</div>
        </div>
        <div id="board" onClick={(e) => this.clicked(e)}>
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