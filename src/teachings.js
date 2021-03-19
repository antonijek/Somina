import React, { Component } from 'react'

class Teachings extends Component {
  state = { ime: '' }

  pr = (e) => {
    this.setState({ ime: e.target.value })
    console.log(e.target.value)
  }
  render() {
    return (
      <div className='font-sans bg-yellow-300  container  mx-auto '>
        ...Teachings
      </div>
    )
  }
}

export default Teachings
