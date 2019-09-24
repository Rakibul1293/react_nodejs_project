const initState = [
    {
        name: 'Rakibul Islam',
        email: 'r@gmail.com',
        phone: '5645465465456',
        id: 1
    },

    {
        name: 'Shoriful Islam',
        email: 'r@gmail.com',
        phone: '5645465465456',
        id: 2
    }
]

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT': {
            let contacts = state.concat(action.payload)
            console.log(action.payload)
            console.log(contacts)
            return contacts
        }

        case 'REMOVE_CONTACT': {
            let contacts = state.filter(c => c.id !== action.payload)
            console.log(action.payload)
            console.log(contacts)
            return contacts
        }

        default: return state
    }
}

export default contactReducer