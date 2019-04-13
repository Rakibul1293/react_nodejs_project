import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="display-4">Rakibul</div>
          <Title name='Rakibul' email='r@gmail.com'/>
          <Title name='Shoriful' email='s@gmail.com'/>
        </div>
      </div>
    );
  }
}

export default App;