import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';

class App extends Component {
  render() {

    const reducer = (state = 0, action) => {

      switch (action.type) {
        case 'TESTA': {
          // return 100
          return state - 100
        }

        case 'TESTB': {
          // return 200
          return state + 200
        }

        default: return state
      }

      //return state
    }

    const store = createStore(reducer)

    store.subscribe(() => {
      console.log(store)
      console.log(store.getState())
    })

    store.subscribe(() => {
      if (store.getState() < 0) {
        console.log("Negative: " + store.getState())
      }
    })

    store.subscribe(() => {
      if (store.getState() >= 0) {
        console.log("Positive: " + store.getState())
      }
    })

    store.dispatch({ type: 'TESTA' })
    store.dispatch({ type: 'TESTB' })
    store.dispatch({ type: 'TESTA' })
    store.dispatch({ type: 'TESTA' })
    store.dispatch({ type: 'TESTB' })

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
