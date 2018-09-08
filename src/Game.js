import React, { Component } from 'react'

import Board from './Board.js'
import Start from './Start.js'
import Menu from './Menu.js'

import './Game.css'

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      menuOn: true
    }
  }

  Clicked() {
    console.log('====================================')
    console.log(this)
    console.log('====================================')
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div className="game">
        {this.state.menuOn == true ? <Menu /> : null}
        <div className="game-board" onClick={(e)=>this.Clicked(e.target)}>
          {this.state.visible == true ? <Start /> : null}
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default Game
