import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// import uuid from 'uuid/v1'
import User from './components/User'
import Search from './components/Search'
import axios from 'axios'




const URL = 'https://api.github.com/users'
class App extends Component {

  state = {
    searchTerm: '',
    user: {},
    found: false
  }

  componentDidUpdate() {
    if (this.state.searchTerm) {
      // if(this.state.searchTerm) {
      axios.get(`${URL}/${this.state.searchTerm}`)
        .then(response => {
          console.log(response.data)
          this.setState(() => {
            return {
              user: response.data,
              found: true
            }
          })
        })

        .catch(err => {
          this.setState(() => {
            return {
              found: false
            }
          })
        })
    }
  }

  change = (searchTerm) => {
    console.log(searchTerm)
    this.setState(() => {
      return {
        searchTerm
      }
    })
    console.log(this.state)
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="container text-center">
        <Search change={this.change} />
        {this.state.found ? <User user={this.state.user} /> : <p> No User Found, Type Valid Username </p>}
      </div>
    );
  }
}

export default App;