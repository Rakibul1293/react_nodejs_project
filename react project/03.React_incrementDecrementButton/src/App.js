import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// import uuid from 'uuid/v1'
import Data from './components/Data'
import ButtonGroup from './components/ButtonGroup'
import Controller from './components/Controller'

class App extends Component {

  constructor() {
    super()

    this.changeValue = this.changeValue.bind(this)
    this.changeIncrease = this.changeIncrease.bind(this)
    this.changeDecrease = this.changeDecrease.bind(this)
  }

  state = {
    value: 0,
    controller: {
      increaseBy: 5,
      decreaseBy: 5
    }
  }

  changeValue = (value) => {
    this.setState({
      value: this.state.value + value
    })
  }

  changeIncrease = (value) => {
    this.setState({
      controller: {
        ...this.setState.controller,
        increaseBy: value
      }
    })
  }

  changeDecrease = (value) => {
    this.setState({
      controller: {
        ...this.setState.controller,
        decreaseBy: value
      }
    })
  }

  render() {
    return (
      <div className="container text-center">

        <Data value={this.state.value} />g
        <ButtonGroup
          changeValue={this.changeValue}
          controller={this.state.controller} />
        <Controller
          controller={this.state.controller}
          changeIncrease={this.changeIncrease}
          changeDecrease={this.changeDecrease} />

      </div>
    )
  }
}

export default App;