import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import uuid from 'uuid/v1'
import Contacts from './components/contacts/Contacts'
import EditContact from './components/editContact/EditContact'
import Favourite from './components/favourites/Favourites'

class App extends Component {

  state = {
    contacts: [{
      name: 'Rakibul Islam',
      phone: '0134566478648',
      email: 'r@gmail.com',
      fb: 'f@facebook.com',
      group: 'Others',
      isFavourite: true,
      id: uuid()
    },
    {
      name: 'Rakibul Islam',
      phone: '0134568648',
      email: 'r@gmail.com',
      fb: 'f@facebook.com',
      group: 'Others',
      isFavourite: true,
      id: uuid()
    },
    {
      name: 'Rakibul Islam',
      phone: '016648',
      email: 'r@gmail.com',
      fb: 'f@facebook.com',
      group: 'Others',
      isFavourite: true,
      id: uuid()
    }
    ],
    selectedContacts: null
  }

  // // Change Name Handler
  // changeNameHandler = (contact) => {
  //   let index = this.state.contacts.findIndex(ct => ct.id === contact.id)

  //   let contacts = [...this.state.contacts]
  //   contacts[index].name = contact.name
  //   this.setState({
  //     contacts
  //   })
  // }

  // Change Name Handler
  changeNameHandler = (id, name) => {
    let index = this.state.contacts.findIndex(ct => ct.id === id)

    let contacts = [...this.state.contacts]
    contacts[index].name = name
    this.setState({
      contacts
    })
  }

  // // Change Phone Handler
  // changePhoneHandler = (contact) => {
  //   let index = this.state.contacts.findIndex(ct => ct.id === contact.id)

  //   let contacts = [...this.state.contacts]
  //   contacts[index].phone = contact.phone
  //   this.setState({
  //     contacts
  //   })
  // }

  // Change Phone Handler
  changePhoneHandler = (id, phone) => {
    let index = this.state.contacts.findIndex(ct => ct.id === id)

    let contacts = [...this.state.contacts]
    contacts[index].phone = phone
    this.setState({
      contacts
    })
  }

  // // Change Email Handler
  // changeEmailHandler = (contact) => {
  //   let index = this.state.contacts.findIndex(ct => ct.id === contact.id)

  //   let contacts = [...this.state.contacts]
  //   contacts[index].email = contact.email
  //   this.setState({
  //     contacts
  //   })
  // }

  // Change Email Handler
  changeEmailHandler = (id, email) => {
    let index = this.state.contacts.findIndex(ct => ct.id === id)

    let contacts = [...this.state.contacts]
    contacts[index].email = email
    this.setState({
      contacts
    })
  }

  editContactHandler = (contact) => {
    this.setState({
      selectedContact: contact
    })
  }

  removeSelectedContact = () => {
    this.setState({
      selectedContact: null
    })
  }

  // // Change Favourite Handler
  // changeFavouriteHandler = (contact) => {
  //   let index = this.state.contacts.findIndex(ct => ct.id === contact.id)

  //   let contacts = [...this.state.contacts]
  //   contacts[index].isFavourite = !contacts[index].isFavourite
  //   this.setState({
  //     contacts
  //   })
  // }



  // Change Favourite Handler
  changeFavouriteHandler = (id, isFavourite) => {
    let index = this.state.contacts.findIndex(ct => ct.id === id)

    let contacts = [...this.state.contacts]
    contacts[index].isFavourite = isFavourite
    this.setState({
      contacts
    })
  }



  // update Favourite Handler
  updateFavouriteHandler = (contact) => {
    let index = this.state.contacts.findIndex(ct => ct.id === contact.id)

    let contacts = [...this.state.contacts]
    contacts[index].isFavourite = !contacts[index].isFavourite
    this.setState({
      contacts
    })
    // console.log(this.state.contacts)
  }

  deleteContactHandler = (contact) => {
    { console.log(contact) }
    let index = this.state.contacts.findIndex(ct => ct.id === contact.id)
    { console.log(index) }

    let contacts = [...this.state.contacts]
    { console.log(contacts) }
    contacts.splice(index, 1)

    // //splice
    // var array=[1,2,3,4,5];
    // console.log(array.splice(2));

    // //slice
    // var array2=[1,2,3,4,5]
    // console.log(array2.slice(2));

    // console.log("----after-----");
    // console.log(array);
    // console.log(array2);

    this.setState({
      contacts
    })
    { console.log(contacts) }
  }

  render() {
    return (
      <div className="container py-3" >
        <div className="row" >
          <Favourite contacts={this.state.contacts} />
        </div>
        <div className="row" >
          <div className="col-md-6" >
            <Contacts
              editHandler={this.editContactHandler.bind(this)}
              deleteHandler={this.deleteContactHandler.bind(this)}
              favouriteHandler={this.updateFavouriteHandler.bind(this)}
              contacts={this.state.contacts} />
          </div>

          <div className="col-md-6" >
            {this.state.selectedContact ? < EditContact
              changeName={this.changeNameHandler.bind(this)}
              changePhone={this.changePhoneHandler.bind(this)}
              changeEmail={this.changeEmailHandler.bind(this)}
              changeFavourite={this.changeFavouriteHandler.bind(this)}
              formHandler={this.removeSelectedContact.bind(this)}
              contact={this.state.selectedContact} />
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;