import React, { Component } from 'react'

import './Box.css'

const x = '<svg id=""\nxmlns="http://www.w3.org/2000/svg"\nxmlns:xlink="http://www.w3.org/1999/xlink"\nwidth="88px" height="88px">\n<path fill-rule="evenodd"  stroke="rgb(255, 252, 252)" stroke-width="0px" stroke-linecap="butt" stroke-linejoin="miter" fill="#ffffff"\nd="M77.536,70.464 L70.464,77.536 L41.500,48.571 L12.536,77.536 L5.464,70.464 L34.429,41.500 L5.464,12.536 L12.536,5.464 L41.500,34.429 L70.464,5.464 L77.536,12.536 L48.571,41.500 L77.536,70.464 Z"></path>\n</svg>';
const o = '<svg id=""\nxmlns="http://www.w3.org/2000/svg"\nxmlns:xlink="http://www.w3.org/1999/xlink"\nwidth="78px" height="78px">\n<path fill-rule="evenodd"  stroke="rgb(255, 252, 252)" stroke-width="10px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"\nd="M36.500,5.000 C53.897,5.000 68.000,19.103 68.000,36.500 C68.000,53.897 53.897,68.000 36.500,68.000 C19.103,68.000 5.000,53.897 5.000,36.500 C5.000,19.103 19.103,5.000 36.500,5.000 Z"></path>\n</svg>';



class Box extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }

  userGo(event) {
    // console.log('====================================');
    // console.log('event ', event);
    // console.log('event.target ', event.target);
    // console.log('event.target.className', event.target.className);
    // console.log('event.target.innerHTML ', event.target.innerHTML);
    // console.log('====================================');
   


    if (event.target.innerHTML == '' && event.target.className =='box') {
      event.target.innerHTML = x;
      console.log('Поставил X');
    } else {
      console.log('Клетка используется');
      
    }    
  }

  non (data) {
    console.log(data.target.innerHTML)
  }

  render() {
    return (
      <div className="box" id={this.props.id} onClick={this.userGo}>
      {/* (this.target.innerHTML = undefined) ? this.userGo: this.non */}
      </div>
    );
  }
}

  export default Box