import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Demo from './Demo';

class App extends Component {
  render() {

    console.log(this.props)
    console.log(this.props.post)

    return (
      <div className="App">
        <Demo />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state
  }
}

export default connect(mapStateToProps)(App);
