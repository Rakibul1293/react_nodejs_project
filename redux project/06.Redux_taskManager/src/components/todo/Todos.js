import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';
import { done } from '../../store/actions/todoActions';
import Todo from './Todo';

class Todos extends Component {

    // filteredTodo = (todos, status) => {
    //     switch (status) {
    //         case 'ACTIVE':
    //             // console.log("ACTIVE Called")
    //             return todos.filter(todo => !todo.isComplete)
    //         case 'COMPLETED':
    //             return todos.filter(todo => todo.isComplete)
    //         default: return todos
    //     }
    // }

    render() {

        // console.log(this.props.todos)

        let todos = this.props.todos

        if (this.props.status === 'ACTIVE') {
            console.log("ACTIVE Fired")
            todos = todos.filter(todo => !todo.isComplete)
        }

        if (this.props.status === 'COMPLETED') {
            console.log("Completed Fired")
            todos = todos.filter(todo => todo.isComplete)
        }

        if (todos.length === 0) {
            return <p> There are no todo available. Please create one by clicking on Add Button </p>
        }

        // if (this.props.todos.length === 0) {
        //     return <p> There are no todo available. Please create one by clicking on Add Button </p>
        // }

        // let filteredTodos = this.filteredTodo(this.props.todos, this.props.status)

        // let filteredTodos = this.props.todos
        // if (this.props.status === 'ACTIVE') {
        //     filteredTodos = filteredTodos.map(todo => !todo.isComplete)
        // } else if (this.props.status === 'COMPLETED') {
        //     filteredTodos = filteredTodos.map(todo => todo.isComplete)
        // }

        // if (filteredTodos.length === 0) {
        //     return <p> There are no todo available. Please create one by clicking on Add Button </p>
        // }

        return (
            <ListGroup>
                {/* {this.props.todos.map(todo => (
                    <Todo key={todo.id} todo={todo} done={this.props.done} />
                ))} */}

                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} done={this.props.done} />
                ))}

                {/* {filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo} done={this.props.done} />
                ))} */}
            </ListGroup>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos,
    status: state.todos.filter
})

export default connect(mapStateToProps, { done })(Todos);