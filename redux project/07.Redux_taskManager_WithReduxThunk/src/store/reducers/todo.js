import { ADD_TODO, MARK_DONE, ACTIVE_FILTER, EDIT_TODO } from '../actions/actionType'

const init = {
    todos: [{
        title: 'Test Title',
        description: 'Test Description',
        isComplete: false,
        colorTag: 'red',
        id: 'rakibul'
    }],
    filter: 'All'
}

const todo = (state = init, action) => {
    switch (action.type) {

        case ADD_TODO: {
            let todos = [...state.todos]
            todos.push(action.payload)
            return {
                ...state,
                todos
            }

            // console.log(action.payload)
            // console.log(state)
        }

        case MARK_DONE: {
            let todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.isComplete = true
                }

                return todo
            })

            return {
                ...state,
                todos
            }
        }

        case ACTIVE_FILTER: {
            return {
                ...state,
                filter: action.payload
            }
        }

        case EDIT_TODO: {
            let { todo, index } = findTodo(state.todos, action.payload.id)
            todo = { ...todo, ...action.payload }
            let todos = [...state.todos]
            todos[index] = todo
            console.log(todos)
            return {
                ...state,
                todos
            }
        }

        default: return state
    }
}

export default todo

const findTodo = (todos, id) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            return {
                todo: todos[i],
                index: i
            }
        }
    }

    return null
}