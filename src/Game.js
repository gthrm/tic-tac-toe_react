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
      selectedOptionTools: '',
      key: 0
    }
  }

  updateForce = () => {
    this.setState({
      menuOn: !this.state.menuOn,
      selectedOptionUser: '',
      selectedOptionTools: '',
      key: this.state.key+1
    })
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
          {this.state.selectedOptionUser === 'user1' ? <BoardBot key={this.state.key} updateForce={this.updateForce} tools={this.state.selectedOptionTools} /> : <BoardUser key={this.state.key} tools={this.state.selectedOptionTools} updateForce={this.updateForce} />}
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
