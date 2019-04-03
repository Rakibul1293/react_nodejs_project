import React, { Component } from 'react'
import Contact from '../contact/Contact'

class Contacts extends Component {

    render() {
        if (this.props.contacts.length === 0) {
            return <p> There is no contact </p>
        }

        return (
            <ul className='list-group'>
                {console.log(this.props.contacts)}
                {this.props.contacts.map(contact => {
                    { console.log(contact) }
                    return <Contact
                        key={contact.id}
                        editHandler={this.props.editHandler}
                        deleteHandler={this.props.deleteHandler}
                        favouriteHandler={this.props.favouriteHandler}
                        contact={contact} />
                })}
            </ul>
        )
    }
}

export default Contacts