import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


/*
const PropsLogger = (WrappedComponents) => {
	class extends Component {
		render() {
			return <WrappedComponents {...this.props} />
		}
	}
}

const Hello = PropsLogger({ name }) => {
	Hello { name }
}

<Hello name="Rakibul" />
*/


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
