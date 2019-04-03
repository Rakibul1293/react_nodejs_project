import React, { Component } from 'react'

class Example extends Component {

    constructor() {
        super()
        console.log('Example Constructor')
    
    }

    componentDidMount() {
        console.log('Example Component Did Mount')
    }

    render() {

        console.log('Example Render')

        return (
            <div></div>
        )
    }
}

export default Example