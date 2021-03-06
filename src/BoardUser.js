import React, { Component } from 'react'

import Box from './Box.js'
import Constants from './Constants.js'

import './Board.css'

class BoardUser extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      winner: undefined,
      wList: '',
      userName: 'Ходит игрок 1',
      key: this.props.key
    }

    this.gameState = {
      board: Array(9).fill(''),
      totalMov: 0,
      turn: Constants.X,
      gameEnded: false,
      gameLocked: false
    }
  }


  renderBox(i) {
    return <Box id={i} />;
  }

  clicked(event) {
    if (this.gameState.gameEnded || this.gameState.gameLocked) return;

    if (this.gameState.board[event.target.dataset.box] == '') {
      this.gameState.board[event.target.dataset.box] = this.gameState.turn == Constants.X ? 'X' : 'O' 
      event.target.innerHTML = this.gameState.turn;
      this.setState ({
        userName: this.state.userName == 'Ходит игрок 1' ? 'Ходит игрок 2' : 'Ходит игрок 1'
      })
      this.gameState.turn = this.gameState.turn == Constants.X ? Constants.O : Constants.X,
      this.gameState.totalMov++
      console.log(this.gameState.totalMov)
    }

    var result = this.check()

    if (result == 'X') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'X',
        userName: '',
        wList: 'Выиграли крестики!'
      })
      console.log('====================================');
      console.log('winner X');
      console.log('====================================');
      return false
    } else if (result == 'O') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'O',
        userName: '',
        wList: 'Выиграли нолики'

      })
      console.log('====================================');
      console.log('winner O');
      console.log('====================================');
      return false
    } else if (result == 'draw') {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'draw',
        userName: '',
        wList: 'Ничья!'
      })
      console.log('====================================');
      console.log('draw');
      console.log('====================================');
      return false
    }
  }

  check() {
    var mov = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]]
    var board = this.gameState.board
    for (let i = 0; i<mov.length; i++) {      
      if (board[mov[i][0]] == board[mov[i][1]] && board[mov[i][1]] == board[mov[i][2]] && board[mov[i][2]] != '') {
        console.log('board[mov[i][0]] ', board[mov[i][0]]);
        return board[mov[i][0]]
      }
      
      console.log(this.gameState.totalMoves);

      if (this.gameState.totalMov == 9) {
        console.log('ничья')
        return 'draw'
      } else {
        console.log('Играем дальше');
      }

    }
  }

  render() {

    return (
      <div>
        <div id="head">
          <div className="headText">{this.state.wList}{this.state.userName}</div>
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
        {this.gameState.gameEnded ? 
        <div className="newgame">
          <div className="menu-params start reset" id="startGame" onClick={() => this.props.updateForce()}>
            <p id="text">Еще раз!</p>
          </div>
        </div>
          : null}
      </div>
    );
  }
}

export default BoardUser