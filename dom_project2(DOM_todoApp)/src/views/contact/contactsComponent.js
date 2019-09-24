import { create } from '../../helper'
import ContactItem from './contactItem'

export default function ContactsComponent(props) {
    let ul = create('ul', { class: 'list-group' })

    props.contactList.forEach(contact => {
        let item = ContactItem({
            name: contact.name,
            phone: contact.phone,
            avatar: contact.name.charAt(0).toUpperCase()
        })

        ul.appendChild(item)
    })

    return ul
}