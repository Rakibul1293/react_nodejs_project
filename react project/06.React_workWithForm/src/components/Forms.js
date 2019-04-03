import React, { Component } from 'react'

class Forms extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        country: '',
        gender: '',
        skills: []
    }

    submitHandler = event => {
        console.log(event.target.name)

        event.preventDefault()

        console.log(this.state)
    }

    changeHandler = event => {
        console.log(event.target.type)

        if (event.target.type === "checkbox") {
            let skills = []
            if (event.target.checked) {
                skills = [...this.state.skills]
                skills.push(event.target.value)
            } else {
                skills = this.state.skills.filter(skill => skill !== event.target.value)
            }
            this.setState({
                skills
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder='Enter Your Name'
                        value={this.state.name}
                        onChange={this.changeHandler}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder='Enter Your Email'
                        value={this.state.email}
                        onChange={this.changeHandler}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder='Enter Your Password'
                        value={this.state.password}
                        onChange={this.changeHandler}
                    />
                </div>

                <div className="input-group">
                    <select name="country" onChange={this.changeHandler}>
                        <option value="Bangladesh"> Bangladesh </option>
                        <option value="USA"> United State </option>
                        <option value="Germany"> Germany </option>
                        <option value="Australia"> Australia </option>
                        <option value="Brazil"> Brazil </option>
                    </select>
                </div>

                <div className="input-group">
                    <input
                        className="form-control"
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={this.changeHandler}
                    />
                    Male

                    <input
                        className="form-control"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={this.changeHandler}
                    />
                    Female

                    <input
                        className="form-control"
                        type="radio"
                        name="gender"
                        value="Other"
                        onChange={this.changeHandler}
                    />
                    Other
                </div>

                <div className="input-group">
                    <input
                        className="form-control"
                        type="checkbox"
                        name="skill"
                        value="JavaScript"
                        onChange={this.changeHandler}
                    />
                    JavaScript

                    <input
                        className="form-control"
                        type="checkbox"
                        name="skill"
                        value="React"
                        onChange={this.changeHandler}
                    />
                    React

                    <input
                        className="form-control"
                        type="checkbox"
                        name="skill"
                        value="Angular"
                        onChange={this.changeHandler}
                    />
                    Angular

                    <input
                        className="form-control"
                        type="checkbox"
                        name="skill"
                        value="NodeJs"
                        onChange={this.changeHandler}
                    />
                    NodeJs

                    <input
                        className="form-control"
                        type="checkbox"
                        name="skill"
                        value="MongoDB"
                        onChange={this.changeHandler}
                    />
                    MongoDB
                </div>

                <button type="submit" className="btn btn-primary"> Submit </button>

            </form>
        )
    }
}

export default Forms