import React, { Component } from 'react'

import BoardBot from './BoardBot.js'
import BoardUser from './BoardUser.js'

import Menu from './Menu.js'

import './Game.css'

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOn: true,
      selectedOptionUser: '',
      selectedOptionTools: ''
    }
  }

  updateData = (value) => {
    this.setState({
      selectedOptionTools: value.selectedOptionTools,
      selectedOptionUser: value.selectedOptionUser,
      menuOn: value.menuOn
    });
  }

  render() {
    return (
      <div className="game">
        {this.state.menuOn == true ? <Menu updateData={this.updateData} /> : null}
        <div className="game-board" >
          {this.state.selectedOptionUser === 'user1' ? <BoardBot tools={this.state.selectedOptionTools}/> : <BoardUser tools={this.state.selectedOptionTools}/>}
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
