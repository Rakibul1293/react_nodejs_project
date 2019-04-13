import React, { Component } from 'react';
import './App.css';
import Contacts from "./contacts/Contacts";
import AddContact from './contacts/AddContact';

class App extends Component {
  render() {
    return (
      < div className="App container" >
        <div className="row">
          <div className="col">
            <h1> Add New Contact </h1>
            <AddContact />
            <h1> All Contacts </h1>
            <Contacts />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
