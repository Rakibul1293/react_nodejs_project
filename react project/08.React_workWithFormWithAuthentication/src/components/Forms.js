import React, { Component } from 'react'
import InputGroup from './formElements/InputGroup'

class Forms extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                <InputGroup 
                    name='name'
                    placeholder='Enter Your Name'
                    info='Your name should not contain any special character'
                    label='Enter Your Full Name'
                    value={ this.state.name }
                    onChange={ this.onChange }
                />

                <InputGroup 
                    type='email'
                    name='email'
                    placeholder='Enter Your Email'
                    info='Please Provide Your Currently Activate Email For Verification'
                    label='Enter Your Valid Email'
                    value={ this.state.email }
                    onChange={ this.onChange }
                />

                <InputGroup 
                    type='password'
                    name='password'
                    placeholder='Enter Your Password'
                    info='Password Length Should Be At Least 8 Character With One Special Character'
                    label='Enter A Secure Password'
                    value={ this.state.password }
                    // error='Password Is Not secure Enough'
                    onChange={ this.onChange }
                />

                <button type='submit' className='btn btn-primary'> Submit </button>
            </form>
        )
    }
}

export default Forms