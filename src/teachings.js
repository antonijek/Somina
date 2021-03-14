import logo from './logo.svg'
import './assets/output.css'

import React, { Component } from 'react'

class Teachings extends Component {
  state = { ime: '' }

  pr = (e) => {
    this.setState({ ime: e.target.value })
    console.log(e.target.value)
  }
  render() {
    return <div className='font-sans bg-yellow-300'>...Teachings</div>
  }
}

export default Teachings
