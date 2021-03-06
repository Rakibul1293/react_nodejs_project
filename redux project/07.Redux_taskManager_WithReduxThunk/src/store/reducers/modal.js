import { TOGGLE_MODAL } from '../actions/actionType';

const modal = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_MODAL: {
            return !state
        }
        default: return state
    }
}

export default modal;