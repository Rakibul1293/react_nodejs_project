import React, { Component } from 'react';
import './App.css';
import ReduxDemo from './ReduxDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="display-4">Rakibul</div>
          <ReduxDemo />
        </div>
      </div>
    );
  }
}

export default App;