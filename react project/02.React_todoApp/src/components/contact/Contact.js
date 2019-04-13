import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

class Contact extends Component {

    render() {

        let avatarStyle = {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'palegreen',
            fontSize: '22px',
            textAlign: 'center',
            lineHeight: '50px',
            fontWeight: 'bold'
        }

        return (

            <li className='list-group-item d-flex'>
                <div style={avatarStyle}>
                    {this.props.contact.name.charAt(0).toUpperCase()}
                </div>
                <div className='mx-3'>
                    <h4> {this.props.contact.name} </h4>
                    <p> {this.props.contact.phone} </p>
                </div>
                <div className='ml-auto'>
                    <div onClick={() => this.props.favouriteHandler(this.props.contact)}>
                        {this.props.contact.isFavourite ? <i className='fa fa-heart'></i> : <i className='fa fa-heart-o'></i>}
                    </div>
                    <div onClick={() => this.props.editHandler(this.props.contact)}>
                        <i className="fa fa-pencil-square-o"></i>
                    </div>
                    <div onClick={() => this.props.deleteHandler(this.props.contact)}>
                        {console.log(this.props.deleteHandler)}
                        {console.log(this.props.contact)}
                        <i className="fa fa-trash-o"></i>
                    </div>
                </div>
            </li>
        )
    }
}

export default Contact