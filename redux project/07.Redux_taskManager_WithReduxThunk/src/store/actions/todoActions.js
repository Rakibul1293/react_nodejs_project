import { ADD_TODO, MARK_DONE, ACTIVE_FILTER, EDIT_TODO } from './actionType'

export const addTodo = todo => {
    console.log(todo)
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const done = id => {
    return {
        type: MARK_DONE,
        payload: id
    }
}

export const filter = activeFilter => ({
    type: ACTIVE_FILTER,
    payload: activeFilter
})

export const editTodo = editedTodo => {
    return {
        type: EDIT_TODO,
        payload: editedTodo
    }
}