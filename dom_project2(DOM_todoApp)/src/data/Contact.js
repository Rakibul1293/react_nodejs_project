// import { get } from './Contacts'
import uuid from 'uuid/v1'

class Contact {
    constructor({ name=null, phone=null, email=null, fb=null, group='other' }) {
        this.name = name
        this.phone = phone
        this.email = email
        this.fb = fb
        this.group = group
        this.id = uuid()
    }
    print() {
        console.log(this)
        // console.log(get())
    }
}

export default Contact