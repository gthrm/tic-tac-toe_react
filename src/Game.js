import React, { Component } from 'react'

import BoardBot from './BoardBot.js'
import BoardUser from './BoardUser.js'

import Menu from './Menu.js'

import api from './api/index.js'

import './Game.css'

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOn: true,
      selectedOptionUser: '',
      selectedOptionTools: '',
      key: 0,
      key2: 0,
      gameAll: '',
      gameWin: ''
    }
  }

  updateForce = () => {
    this.setState({
      menuOn: !this.state.menuOn,
      selectedOptionUser: '',
      selectedOptionTools: '',
      gameAll: '',
      gameWin: '',
      key1: this.state.key+1,
      key2: this.state.key+1
    })
  }

  updateData = (value) => {
    this.setState({
      selectedOptionTools: value.selectedOptionTools,
      selectedOptionUser: value.selectedOptionUser,
      menuOn: value.menuOn
    });
  }

  gameAllfunc() {
    if(this.state.gameAll === '' || this.state.gameWin === '') {
      api.gameAll().then(({data})=>{
             
        this.setState({
          gameAll: data.length
        });
      });

      api.gameWin().then(({data})=>{
        
        this.setState({
          gameWin: data.length
        });
      });
    }
  }

  render() {
    return (
      <div className="game">
        {this.state.menuOn == true ? <Menu updateData={this.updateData} /> : null}
        <div className="game-board" >
          {this.state.selectedOptionUser === 'user1' ? <BoardBot apiCreateWinGame={api.createWinGame} apiCreateGame={api.createGame} key1={this.state.key1} updateForce={this.updateForce} tools={this.state.selectedOptionTools} /> : <BoardUser key2={this.state.key2} tools={this.state.selectedOptionTools} updateForce={this.updateForce} />}
        </div>
        <div className="game-info"> 
          <div className='headText info' onLoad={this.gameAllfunc()} >
            <p className='headText all'>Количество сыгранных игр: {this.state.gameAll}</p>
            <p className='headText win'>Количество выигранных игр: {this.state.gameWin}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
