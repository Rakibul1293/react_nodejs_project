// import React from 'react'
import React, { Component } from 'react'

// class title extends React.Component{
class Title extends Component{
	constructor(props) {
		super(props)

		this.state = {
			number: 0
		}
	}

	counter() {
		this.setState({
			number: this.state.number + 1
		})
		console.log(this.state.number)
	}

	render() {
		return(
			
			<div>
				<div>
					<h1>My name is: {this.props.name} and Email ({ this.props.email })</h1>
				</div>
				<p>{ this.state.number }</p>
				<button onClick={ () => this.counter() }>Click Me</button>
			</div>
		)
	}
}

export default Title