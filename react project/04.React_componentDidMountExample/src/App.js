import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
// import uuid from 'uuid/v1'
import Example from './components/Example'
import axios from 'axios'

class App extends Component {

  // constructor() {
  //   super()
  //   console.log('Constructor')

  // }

  // componentDidMount() {
  //   console.log('Component Did Mount')
  // }

  // render() {

  //   console.log('I am reader')

  //   return (
  //     <div className="container text-center">
  //       <Example />
  //     </div>
  //   );
  // }





  // componentDidMount() {
  //   console.log(axios.get('https://jsonplaceholder.typicode.com/users'))

  //   // axios.get('https://jsonplaceholder.typicode.com/users')
  //   // axios.get('/users')
  //   // axios.get('/posts')
  //   axios.get('/posts/11')
  //     // .then( response => console.log(response) )
  //     .then( response => console.log(response.data) )
  // }

  // render() {
  //   return (
  //     <div className="container text-center">

  //     </div>
  //   );
  // }





  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/users')
      .then(response => {
        this.setState({
          users: response.data
        })
      })
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="container text-center">
        <ul>
          {this.state.users.map(user => <h1> {user.name} </h1>)}
        </ul>
      </div>
    );
  }
}

export default App;