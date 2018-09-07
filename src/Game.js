import React, { Component } from 'react'

import Board from './Board.js'

// import './Game.css'

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: false
    }
  }
onGame(){
  console.log(this);
  this.setState({
    game: this.state.game == false ? true : false
  });
}

  render() {
    return (
      <div className="game">
        <div className="game-board">
         {this.state.game == true? <Board />:null}
        </div>
        <div className="game-info">
          <div>
            <button id="start" onClick={(e) => this.onGame(e.target)}>Reset</button>
          </div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default Game
