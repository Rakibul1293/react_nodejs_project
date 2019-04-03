import React from 'react'
import User from './User'

const Users = (props) => {
    return (
        <ul>
            {props.users.map(user => {
                return (
                    <User key={user.id} user={user} />
                )
            })}
        </ul>
    )
}

export default Users