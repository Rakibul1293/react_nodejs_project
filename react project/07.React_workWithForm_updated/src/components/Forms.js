import React, { Component } from 'react'



const initialState = {
    name: '',
    email: '',
    password: '',
    country: '',
    gender: '',
    skills: []
}
console.log(initialState)

class Forms extends Component {

    constructor() {
        super()

        this.myForm = React.createRef()
        this.nameInp = React.createRef()
    }

    state = initialState

    submitHandler = event => {
        console.log(event.target.name)

        event.preventDefault()
        console.log(initialState)
        console.log(this.state)
        console.log(this.myForm)
        console.log(this.myForm.current)

        if (!this.state.name) {
            this.nameInp.current.focus()
        }

        let user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            country: this.state.country,
            gender: this.state.gender,
            skills: this.state.skills
        }
        console.log(user)

        this.props.addUser(user)

        this.setState({
            ...initialState
        })

        this.props.getFormRef(this.myForm)
        // event.currentTarget.reset()
        console.log(this.myForm.current)
        this.myForm.current.reset()
    }

    changeHandler = event => {
        console.log(initialState)
        console.log(this.state)
        console.log(event.target.type)
        console.log(event.target.type === "checkbox")
        console.log(event.target.checked)
        console.log(event.target.value)
        console.log(event.target.name)
        console.log([event.target.name])

        if (event.target.type === "checkbox") {
            let skills = []
            if (event.target.checked) {
                skills = [...this.state.skills]
                skills.push(event.target.value)
            } else {
                console.log(event.target.value)
                skills = this.state.skills.filter(skill => skill !== event.target.value)
                console.log(skills)
            }
            this.setState({
                skills
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
            console.log(this.state)
        }
    }

    componentDidMount() {
        console.log(this.myForm)
        console.log(this.myForm.current)
        this.myForm.current.focus()
    }

    render() {
        return (
            <form ref={this.myForm} onSubmit={this.submitHandler}>
                <div className="form-group">
                    <input
                        ref={this.nameInp}
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
                    <select
                        name="country"
                        className="form-control"
                        onChange={this.changeHandler}>

                        <option> Select A Country </option>
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