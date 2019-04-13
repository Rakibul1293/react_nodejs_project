import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// import uuid from 'uuid/v1'
import Forms from './components/Forms'
// import axios from 'axios'




class App extends Component {

  state = {
    users: [],
    error: ''
  }

  addNewUser = (user) => {
    let users = [...this.state.users]
    users.push(user)

    this.setState(() => ({
      users
    }))
  }

  getFormRef = (ref) => {
    console.log(ref.current)
  }

  render() {

    console.log(this.state)

    return (
      <div className="container">
        <Forms />
      </div>
    );
  }
}

export default App;