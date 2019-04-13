import React from 'react';

const ContactItem = ({ contact, remove }) => {
    return (
        <li className="list-group-item d-flex">
            <div>
                <p>User Name: {contact.name} <span> Contact No: {contact.phone} </span></p>
            </div>
            <div className="ml-auto">
                <button className="btn btn-danger" onClick={() => remove(contact.id)}> Delete </button>
            </div>
        </li>
    )
}

export default ContactItem;