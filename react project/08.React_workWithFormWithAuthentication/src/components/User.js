import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

class User extends Component {

    render() {

        if(Object.getOwnPropertyNames(this.props.user).length === 0) {
            return(
                <Loader type="TainSpin" color="#00BFFF" height="300" width="300" />
            )
        }

        return (
            <div>
                <p> <strong> Name: </strong> { this.props.user.name } </p>
                <p> <strong> User Name: </strong> { this.props.user.username } </p>
                <p> <strong> Email: </strong> { this.props.user.email } </p>
                <p> <strong> Phone: </strong> { this.props.user.phone } </p>
                <p> <strong> Company Name: </strong> { this.props.user.company.name } </p>
            </div>
        )
    }
}

export default User