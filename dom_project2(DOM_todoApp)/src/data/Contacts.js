// let contactList = []

// export function createNew(contact) {
//     contactList.push(contact)
// }

// export function get() {
//     return contactList
// }

// export function deleteContact(contact) {
//     let index = getIndex(contact.id)
//     contactList.splice(index, 1)
// }

// export function updateContact(oldContact, changes) {
//     let index = getIndex(oldContact.id)
//     for(let i in changes) {
//         contactList[index] [i] = changes[i]
//     }

//     // this.contactList[index] = {
//     //     ...this.contactList[index],
//     //     ...changes
//     // }
// }
// // Index = 1
// // changes = {name: 'Rakibul Islam', phone: '0135675687698674647'}
// // this.contactList[1][name] = changes[name]
// // this.contactList[1][phone] = changes[phone]


// export function getSingleContact(id) {
//     let index = getIndex(id)
//     return contactList[index]
// }

// //Find Index of that contact by it's ID
// //Then remove it from arry
// function getIndex(id) {
//     let index = contactList.findIndex((c) => {
//         return id === contact.id
//     })
//     return index
// }



class Contacts {
    constructor() {
        this.contactList = []
    }

    createNewContact(contact) {
        this.contactList.push(contact)
    }

    get() {
        return this.contactList
    }

    deleteContact(contact) {
        let index = this.getIndex(contact.id)
        this.contactList.splice(index, 1)
    }

    updateContact(oldContact, changes) {
        let index = this.getIndex(oldContact.id)
        for(let i in changes) {
            this.contactList[index][i] = changes[i]
        }
    }

    getSingleContact(id) {
        let index = this.getIndex(id)
        return this.contactList[index]
    }

    getIndex(id) {
        let index = this.contactList.findIndex((c) => {
            return id === c.id
        })
        return index
    }
}

export default Contacts