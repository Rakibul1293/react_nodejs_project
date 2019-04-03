import { getId, query, create } from './helper'
// import helper from './helper'
import Contact from './data/Contact'
import Contacts from './data/Contacts'
// import { createNew, get } from './data/Contacts'
// import ContactItem from './views/contact/contactItem'
import ContactsComponent from './views/contact/contactsComponent'


// What is MVC => Model View Controller
// Model -> Data Layer
// View -> Graphical User Interface(GUI)
// Controller -> An Adapter to Adapt Model and View


// let obj = {
//     name: 'Rakibul Islam',
//     phone: '01378786768887',
//     email: 'r@gmail.com',
//     fb: 'f@fb.com',
//     group: 'family'
// }
// console.log(obj)
// let contact = new Contact(obj)
// contact.print()



// let contact = new Contact({
//     name: 'Rakibul Islam',
//     phone: '01378786768887',
//     email: 'r@gmail.com',
//     fb: 'f@fb.com',
//     group: 'family'
// })
// contact.print()



// createNew(10)
// createNew(18)
// createNew(15)
// let arr = get()
// console.log(arr)
// new Contact({}).print()



// let contacts = new Contacts()
// contacts.createNewContact(new Contact({}))
// contacts.createNewContact(new Contact({}))
// contacts.createNewContact(new Contact({}))

// let contactList = contacts.get()
// console.log(contactList)

// contacts.get().forEach(contact => {
//     contacts.getSingleContact(contact.id).name = 'Rakibul Islam'
// })
// console.log(contacts.get())



// let props = {
//     name: 'Rakibul Islam',
//     phone: '013574657676678',
//     avatar: 'R'
// }

// let li = ContactItem(props)
// console.log(li)

// let li2 = ContactItem({
//     name: 'Shoriful Islam',
//     phone: '013574657',
//     avatar: 'S'
// })
// console.log(li2)

// let ul = getId('lists')
// ul.appendChild(li)
// ul.appendChild(li2)





let data = [
    {name: 'Rakibul Islam', phone: '0134546876876889'},
    {name: 'Shoriful Islam', phone: '01345489'},
    {name: 'Shofiqul Islam', phone: '01376876889'},
    {name: 'Mamun', phone: '01345876889'},
    {name: 'Zahid', phone: '01389'}
]

let ul = ContactsComponent({
    contactList: data
})
ul.addEventListener('click', function(e) {
    // console.log(e)
    if(e.target.nodeName === 'LI') {
        alert('Something')
    }
})

console.log(ul)

let container = query('.container')
container.appendChild(ul)