import React, { Component } from 'react'
import Loader from 'react-loader-spinner'

class User extends Component {

    render() {

        if (Object.getOwnPropertyNames(this.props.user).length === 0) {
            return (
                <Loader type="TainSpin" color="#00BFFF" height="300" width="300" />
            )
        }

        return (
            <div className="row">
                <div className="col-sm-4">
                    <div style={{ borderRadius: "50%", overflow: "hidden", width: "200px", height: "200px" }}>
                        <img className="img-fluid" src={this.props.user.avatar_url} alt={this.props.user.name} />
                    </div>
                    <a href={this.props.user.html_url} className='btn btn-primary'> Visit Github </a>
                </div>

                <div className="col-sm-4">
                    <div>
                        <h3> Name: {this.props.user.name} </h3>
                        <h4> Total Repo: {this.props.user.public_repos} </h4>
                        <h4> Followers: {this.props.user.followers} </h4>
                        <h4> Followings: {this.props.user.following} </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default User