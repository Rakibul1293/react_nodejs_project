import { LOAD_POSTS, LOADING_STATE } from '../actions/actionType'

const init = {
    posts: [],
    loading: false
}

const postReducer = (state = init, action) => {
    switch (action.type) {
        case LOAD_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case LOADING_STATE: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default: return state
    }
}

export default postReducer