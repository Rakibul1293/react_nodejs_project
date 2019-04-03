import React, { Component } from 'react'

class EditContact extends Component {

    nameHandler = (event) => {
        let newName = event.target.value
        this.props.changeName(this.props.contact.id, newName)
    }

    phoneHandler = (event) => {
        let newPhone = event.target.value
        this.props.changePhone(this.props.contact.id, newPhone)
    }

    emailHandler = (event) => {
        let newEmail = event.target.value
        this.props.changeEmail(this.props.contact.id, newEmail)
    }

    favouriteHandler = (event) => {
        let newFavourite = event.target.value
        this.props.changeFavourite(this.props.contact.id, newFavourite)
    }

    formHandler = (event) => {
        event.preventDefault()
        this.props.formHandler()
    }

    render() {
        return (
            <form onSubmit={this.formHandler}>
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder='Enter Your Name'
                    onChange={this.nameHandler}
                    value={this.props.contact.name} />
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder='Enter Your Phone'
                    onChange={this.phoneHandler}
                    value={this.props.contact.phone} />
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder='Enter Your Email'
                    onChange={this.emailHandler}
                    value={this.props.contact.email} />
                <div className='form-group form-check mb-2'>
                    <input
                        className='form-check-input mb-2'
                        type='checkbox'
                        id='chk'
                        placeholder='Enter Your Favourite'
                        onChange={this.favouriteHandler}
                        checked={this.props.contact.isFavourite}
                        value={this.props.contact.isFavourite}
                    />
                    <label className="form-check-level" htmlFor="chk">
                        Do You Want to Make it Favourite ?
                    </label>
                </div>





                <button className='btn btn-primary' type='submit'> Update Contact </button>
            </form>
        )
    }
}

export default EditContact;