import React, { Component } from 'react'

import Box from './Box.js'
import Constants from './Constants.js'

import './Board.css'

class BoardBot extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      winner: undefined,
      wList: '',
      userName: 'Ходит игрок 1',
      key1: this.props.key1
    }

    this.gameState = {
      board: Array(9).fill(''),
      totalMov: 0,
      turn: this.props.tools === 'X' ? Constants.X : Constants.O,
      gameEnded: false,
      gameLocked: false,
      botTurn: this.props.tools === 'X' ? Constants.O : Constants.X,
      botTools: this.props.tools === 'X' ? 'O' : 'X'
    }
  }

  renderBox(i) {
    return <Box id={i} />;
  }

  clicked(data) {

    if (this.gameState.gameEnded || this.gameState.gameLocked) return;
    
    if (this.gameState.board[data.dataset.box] == '') {
      this.gameState.board[data.dataset.box] = this.gameState.turn == Constants.X ? 'X' : 'O' 
      data.innerHTML = this.gameState.turn;
      this.setState ({
        userName: this.state.userName == 'Ходит игрок 1' ? 'Ходит игрок 2' : 'Ходит игрок 1'
      });

      this.gameState.turn = this.gameState.turn == Constants.X ? Constants.O : Constants.X,
      this.gameState.totalMov++
      console.log(this.gameState.totalMov);
    }

    var result = this.check();
    console.log('====================================');
    console.log('result', result);
    console.log('====================================');
    if (result == 'X') {
      console.log(this.gameState.botTools);
      
      this.gameState.botTools !== 'X' ? this.props.apiCreateWinGame() : console.log('Это бот выйграл');
      this.props.apiCreateGame();
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'X',
        userName: '',
        wList: 'Выиграли крестики!'
      });
      console.log('====================================');
      console.log('winner X');
      console.log('====================================');
      return false;

    } else if (result == 'O') {
      this.gameState.botTools !== 'O' ? this.props.apiCreateWinGame() : console.log('Это бот выйграл');
      this.props.apiCreateGame();
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'O',
        userName: '',
        wList: 'Выиграли нолики'
      });
      console.log('====================================');
      console.log('winner O');
      console.log('====================================');
      return false;

    } else if (result == 'draw') {
      this.props.apiCreateGame();
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'draw',
        userName: '',
        wList: 'Ничья!'
      });
      console.log('====================================');
      console.log('draw');
      console.log('====================================');
      return false;
    }
    
    if (this.gameState.turn === this.gameState.botTurn && !this.gameState.gameEnded) {
      this.gameState.gameLocked = true;
      setTimeout(() => {
        do {
          var bot = this.botGo();
        } while (this.gameState.board[bot] !='');
        
        this.gameState.gameLocked = false;
        this.clicked(document.getElementsByClassName('box')[bot]);
      }, 300);
      
    }
    
  }

  botGo() {
    //Проверка на фигуры бота
    if (this.gameState.board[0] == this.gameState.board[1] && this.gameState.board[0] == this.gameState.botTools && document.getElementById(2).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 1, ставь в 2');
      return(2);
      
    }if (this.gameState.board[1] == this.gameState.board[2] && this.gameState.board[1] == this.gameState.botTools && document.getElementById(0).innerHTML == '' && this.gameState.board[1] != '') {
      console.log('1 = 2, ставь в 0');
      return(0);
      
    }if (this.gameState.board[3] == this.gameState.board[4] && this.gameState.board[3] == this.gameState.botTools && document.getElementById(5).innerHTML == '' && this.gameState.board[3] != '') {
      console.log('3 = 4, ставь в 5');
      return(5);
      
    }if (this.gameState.board[4] == this.gameState.board[5] && this.gameState.board[4] == this.gameState.botTools && document.getElementById(3).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 5, ставь в 3');
      return(3);
      
    }if (this.gameState.board[6] == this.gameState.board[7] && this.gameState.board[6] == this.gameState.botTools && document.getElementById(8).innerHTML == '' && this.gameState.board[6] != '') {
      console.log('6 = 7, ставь в 8');
      return(8);
      
    }if (this.gameState.board[7] == this.gameState.board[8] && this.gameState.board[7] == this.gameState.botTools && document.getElementById(6).innerHTML == '' && this.gameState.board[7] != '') {
      console.log('7 = 8, ставь в 6');
      return(6);
      
    }if (this.gameState.board[0] == this.gameState.board[3] && this.gameState.board[0] == this.gameState.botTools && document.getElementById(6).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 3, ставь в 6');
      return(6);
      
    }if (this.gameState.board[3] == this.gameState.board[6] && this.gameState.board[3] == this.gameState.botTools && document.getElementById(0).innerHTML == '' && this.gameState.board[3] != '') {
      console.log('3 = 6, ставь в 0');
      return(0);
      
    }if (this.gameState.board[1] == this.gameState.board[4] && this.gameState.board[1] == this.gameState.botTools && document.getElementById(7).innerHTML == '' && this.gameState.board[1] != '') {
      console.log('1 = 4, ставь в 7');
      return(7);
      
    }if (this.gameState.board[4] == this.gameState.board[7] && this.gameState.board[4] == this.gameState.botTools && document.getElementById(1).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 7, ставь в 1');
      return(1);
      
    }if (this.gameState.board[2] == this.gameState.board[5] && this.gameState.board[2] == this.gameState.botTools && document.getElementById(8).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('2 = 5, ставь в 8');
      return(8);
      
    }if (this.gameState.board[5] == this.gameState.board[8] && this.gameState.board[5] == this.gameState.botTools && document.getElementById(2).innerHTML == '' && this.gameState.board[5] != '') {
      console.log('5 = 8, ставь в 2');
      return(2);
      
    }if (this.gameState.board[0] == this.gameState.board[4] && this.gameState.board[0] == this.gameState.botTools && document.getElementById(8).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 4, ставь в 8');
      return(8);
      
    }if (this.gameState.board[4] == this.gameState.board[8] && this.gameState.board[4] == this.gameState.botTools && document.getElementById(0).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 8, ставь в 0');
      return(0);
      
    }if (this.gameState.board[2] == this.gameState.board[4] && this.gameState.board[2] == this.gameState.botTools && document.getElementById(6).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('2 = 4, ставь в 6');
      return(6);
      
    }if (this.gameState.board[4] == this.gameState.board[6] && this.gameState.board[4] == this.gameState.botTools && document.getElementById(2).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 6, ставь в 2');
      return(2);
      
    }if (this.gameState.board[0] == this.gameState.board[6] && this.gameState.board[0] == this.gameState.botTools && document.getElementById(3).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 6, ставь в 3');
      return(3);
      
    }if (this.gameState.board[1] == this.gameState.board[7] && this.gameState.board[1] == this.gameState.botTools && document.getElementById(4).innerHTML == '' && this.gameState.board[1] != '') {
      console.log('1 = 7, ставь в 4');
      return(4);
      
    }if (this.gameState.board[2] == this.gameState.board[8] && this.gameState.board[2] == this.gameState.botTools && document.getElementById(5).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('2 = 8, ставь в 5');
      return(5);
      
    }if (this.gameState.board[0] == this.gameState.board[2] && this.gameState.board[0] == this.gameState.botTools && document.getElementById(1).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 2, ставь в 1');
      return(1);
      
    }if (this.gameState.board[3] == this.gameState.board[5] && this.gameState.board[3] == this.gameState.botTools && document.getElementById(4).innerHTML == '' && this.gameState.board[3] != '') {
      console.log('3 = 5, ставь в 4');
      return(4);
      
    }if (this.gameState.board[6] == this.gameState.board[8] && this.gameState.board[6] == this.gameState.botTools && document.getElementById(7).innerHTML == '' && this.gameState.board[6] != '') {
      console.log('6 = 8, ставь в 7');
      return(7);
      
    }if (this.gameState.board[0] == this.gameState.board[8] && this.gameState.board[0] == this.gameState.botTools && document.getElementById(4).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 8, ставь в 4');
      return(4);
      
    }if (this.gameState.board[2] == this.gameState.board[6] && this.gameState.board[2] == this.gameState.botTools && document.getElementById(4).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('0 = 8, ставь в 4');
      return(4);
      
    }
  
    // Общая проверка
    if (this.gameState.board[0] == this.gameState.board[1] && document.getElementById(2).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 1, ставь в 2');
      return(2);
      
    }if (this.gameState.board[1] == this.gameState.board[2] && document.getElementById(0).innerHTML == '' && this.gameState.board[1] != '') {
      console.log('1 = 2, ставь в 0');
      return(0);
      
    }if (this.gameState.board[3] == this.gameState.board[4] && document.getElementById(5).innerHTML == '' && this.gameState.board[3] != '') {
      console.log('3 = 4, ставь в 5');
      return(5);
      
    }if (this.gameState.board[4] == this.gameState.board[5] && document.getElementById(3).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 5, ставь в 3');
      return(3);
      
    }if (this.gameState.board[6] == this.gameState.board[7] && document.getElementById(8).innerHTML == '' && this.gameState.board[6] != '') {
      console.log('6 = 7, ставь в 8');
      return(8);
      
    }if (this.gameState.board[7] == this.gameState.board[8] && document.getElementById(6).innerHTML == '' && this.gameState.board[7] != '') {
      console.log('7 = 8, ставь в 6');
      return(6);
      
    }if (this.gameState.board[0] == this.gameState.board[3] && document.getElementById(6).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 3, ставь в 6');
      return(6);
      
    }if (this.gameState.board[3] == this.gameState.board[6] && document.getElementById(0).innerHTML == '' && this.gameState.board[3] != '') {
      console.log('3 = 6, ставь в 0');
      return(0);
      
    }if (this.gameState.board[1] == this.gameState.board[4] && document.getElementById(7).innerHTML == '' && this.gameState.board[1] != '') {
      console.log('1 = 4, ставь в 7');
      return(7);
      
    }if (this.gameState.board[4] == this.gameState.board[7] && document.getElementById(1).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 7, ставь в 1');
      return(1);
      
    }if (this.gameState.board[2] == this.gameState.board[5] && document.getElementById(8).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('2 = 5, ставь в 8');
      return(8);
      
    }if (this.gameState.board[5] == this.gameState.board[8] && document.getElementById(2).innerHTML == '' && this.gameState.board[5] != '') {
      console.log('5 = 8, ставь в 2');
      return(2);
      
    }if (this.gameState.board[0] == this.gameState.board[4] && document.getElementById(8).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 4, ставь в 8');
      return(8);
      
    }if (this.gameState.board[4] == this.gameState.board[8] && document.getElementById(0).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 8, ставь в 0');
      return(0);
      
    }if (this.gameState.board[2] == this.gameState.board[4] && document.getElementById(6).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('2 = 4, ставь в 6');
      return(6);
      
    }if (this.gameState.board[4] == this.gameState.board[6] && document.getElementById(2).innerHTML == '' && this.gameState.board[4] != '') {
      console.log('4 = 6, ставь в 2');
      return(2);
      
    }if (this.gameState.board[0] == this.gameState.board[6] && document.getElementById(3).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 6, ставь в 3');
      return(3);
      
    }if (this.gameState.board[1] == this.gameState.board[7] && document.getElementById(4).innerHTML == '' && this.gameState.board[1] != '') {
      console.log('1 = 7, ставь в 4');
      return(4);
      
    }if (this.gameState.board[2] == this.gameState.board[8] && document.getElementById(5).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('2 = 8, ставь в 5');
      return(5);
      
    }if (this.gameState.board[0] == this.gameState.board[2] && document.getElementById(1).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 2, ставь в 1');
      return(1);
      
    }if (this.gameState.board[3] == this.gameState.board[5] && document.getElementById(4).innerHTML == '' && this.gameState.board[3] != '') {
      console.log('3 = 5, ставь в 4');
      return(4);
      
    }if (this.gameState.board[6] == this.gameState.board[8] && document.getElementById(7).innerHTML == '' && this.gameState.board[6] != '') {
      console.log('6 = 8, ставь в 7');
      return(7);
      
    }if (this.gameState.board[0] == this.gameState.board[8] && document.getElementById(4).innerHTML == '' && this.gameState.board[0] != '') {
      console.log('0 = 8, ставь в 4');
      return(4);
      
    }if (this.gameState.board[2] == this.gameState.board[6] && document.getElementById(4).innerHTML == '' && this.gameState.board[2] != '') {
      console.log('0 = 8, ставь в 4');
      return(4);
      
    } else {
      var rand = 0.5 + Math.random() * 9;
      rand = Math.round(rand);
      return rand;
    };
  }

  check() {
    var mov = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];
    var board = this.gameState.board;
    for (let i = 0; i<mov.length; i++) {      
      if (board[mov[i][0]] == board[mov[i][1]] && board[mov[i][1]] == board[mov[i][2]] && board[mov[i][2]] != '') {
        console.log('board[mov[i][0]] ', board[mov[i][0]]);
        return board[mov[i][0]]

      }

      console.log(this.gameState.totalMoves);

      if (this.gameState.totalMov == 9) {
        console.log('ничья');
        return 'draw';

      } else {
        console.log('Играем дальше');
      }

    }
  }

  reloadLocation = (e) => this.forceUpdate(e);

  render() {

    return (
      <div>
        <div id="head">
          <div className="headText">{this.state.wList}{this.state.userName}</div>
        </div>
        <div id="board" onClick={(e) => this.clicked(e.target)}>
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

export default BoardBot;