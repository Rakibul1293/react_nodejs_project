import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_CONTACT } from '../../store/actions/actionTypes';

const initState = {
    name: '',
    email: '',
    phone: '',
    id: ''
}
class AddContact extends Component {
    state = initState

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        let id = parseInt(this.state.id)
        this.props.add(this.state)
        this.setState({
            ...initState,
            id
        })
    }

    render() {

        let { name, email, phone, id } = this.state

        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Id"
                    value={id}
                    name='id'
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={name}
                    name='name'
                    onChange={this.changeHandler}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Phone No"
                    value={phone}
                    name='phone'
                    onChange={this.changeHandler}
                />
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={email}
                    name='email'
                    onChange={this.changeHandler}
                />
                <button type="submit" className="btn btn-success"> {" "} Submit{" "} </button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    add: (contact) => dispatch({ type: ADD_CONTACT, payload: contact })
})

export default connect(null, mapDispatchToProps)(AddContact)