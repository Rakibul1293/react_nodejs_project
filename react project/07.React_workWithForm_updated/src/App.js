import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// import uuid from 'uuid/v1'
import Forms from './components/Forms'
import axios from 'axios'




class App extends Component {

  state = {
    users: [],
    error: ''
  }

  addNewUser = (user) => {
    console.log(user)
    let users = [...this.state.users]
    console.log(users)
    users.push(user)
    console.log(users)

    this.setState(() => ({
      users
    }))
    console.log(users)
  }

  getFormRef = (ref) => {
    console.log(ref)
    console.log(ref.current)
  }

  render() {

    console.log(this.state)

    return (
      <div className="container">
        <Forms getFormRef={this.getFormRef.bind(this)} addUser={this.addNewUser.bind(this)} />
      </div>
    )
  }
}

export default App;