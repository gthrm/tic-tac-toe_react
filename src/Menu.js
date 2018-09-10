import React, { Component } from 'react'

import './Menu.css'



class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOptionUser: 'user1',
            selectedOptionTools: 'X',
            menuOn: false
        }
    }


    handleOptionChangeUser() {
        
        this.setState({
            selectedOptionUser: this.state.selectedOptionUser==='user1'?'user2':'user1'
        });
    }

    handleOptionChangeTools() {
        this.setState({
            selectedOptionTools: this.state.selectedOptionTools==='X'?'O':'X'
        });
    }

  render() {
    return (
      <div className="menu">
        <div className="contant">
            <div className="title">
                <h1 id="title">Tic-Tac-Toe by cdROma</h1>
            </div>
            <div className="menu-params users">
                <p id="text">Количество игроков</p>
                <div className="checkBut">
                    <label>
                        <input className="inputRadio" type="radio" checked={this.state.selectedOptionUser === 'user1'} onChange={(e)=>this.handleOptionChangeUser(e)} name="users"/>
                        Один Игрок
                    </label>
                    <label>
                        <input className="inputRadio" type="radio" checked={this.state.selectedOptionUser === 'user2'} onChange={(e)=>this.handleOptionChangeUser(e)} name="users"/>
                        Два Игрока
                    </label>
                </div>
            </div>
            {this.state.selectedOptionUser === 'user1' ? <div className="menu-params tools">
                <p id="text">Играть за:</p>
                <div className="checkBut">
                    <label>
                        <input className="inputRadio" type="radio" checked={this.state.selectedOptionTools === 'X'} onChange={(e)=>this.handleOptionChangeTools(e)} name="tools"/>
                        Крестики
                    </label>
                    <label>
                        <input className="inputRadio" type="radio" checked={this.state.selectedOptionTools === 'O'} onChange={(e)=>this.handleOptionChangeTools(e)} name="tools"/>
                        Нолики
                    </label>
                </div>
            </div>: null}
            <div className="menu-params start" id="startGame" onClick={() => {this.props.updateData(this.state)}}>
                <p id="text">Start</p>
            </div>

            <div className="menu-params info">
                <p>cdROma 2018</p>
            </div>
        </div>
      </div>
    );
  }
}

export default Menu