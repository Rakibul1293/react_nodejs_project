import React, { Component } from 'react'

class Favourites extends Component {

    render() {

        let contacts = this.props.contacts.filter(contact => {
            // console.log(contact)
            // let c = contact.isFavourite
            // console.log(c)
            // console.log(typeof c)
            return contact.isFavourite
            // return c
        })
        // console.log(contacts)
        // console.log(typeof contacts)
        let style = {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'skyblue',
            fontSize: '26px',
            textAlign: 'center',
            lineHeight: '31px',
            fontWeight: 'bold'
        }
        let pStyle = {
            fontSize: '20px'
        }

        return (
            <div className="d-flex border ml-3 mb-3">
                {contacts.map(contact => {
                    // console.log(contact)
                    return (
                        <div className='mx-2' key={contact.id} style={style} >
                            {contact.name.charAt(0).toUpperCase()}
                            { /* console.log( contact.name.charAt(0).toUpperCase() ) */}
                            <p style={pStyle}>
                                {contact.name.split(' ')[0]}
                                { /* console.log( contact.name.split(' ')[0] ) */}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Favourites