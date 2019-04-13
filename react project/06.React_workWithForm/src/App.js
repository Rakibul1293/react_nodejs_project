import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// import uuid from 'uuid/v1'
import Users from './components/Users'
import Forms from './components/Forms'
import axios from 'axios'




class App extends Component {

  state = {
    users: [],
    error: ''
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState(() => {
          return {
            users: response.data
          }
        })
      })
      // .catch(error => console.log(error))
      // .catch(error => console.log(error.message))
      .catch(error => {
        this.setState(() => {
          return {
            error: error.message
          }
        })
      })
  }

  render() {

    return (
      <div className="container">
        {this.state.error && <p> {this.state.error} </p>}
        <Users users={this.state.users} />
        <Forms />
      </div>
    );
  }
}

export default App;