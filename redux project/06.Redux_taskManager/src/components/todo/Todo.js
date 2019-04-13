import React, { Component } from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import EditTodo from '../modals/EditTodo';

class Todo extends Component {

    state = {
        modal: false
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        let { todo, done } = this.props
        console.log(todo)
        return (
            <ListGroupItem className='d-flex'>
                {!todo.isComplete
                    ? <div> {todo.title} </div>
                    : <div> <strike> {todo.title} </strike> </div>
                }
                <div className='ml-auto'>
                    <Button onClick={() => this.setState({ modal: true })}> Edit </Button>
                    <Button onClick={() => done(todo.id)} color='warning'> Mark Done </Button>
                </div>
                <EditTodo todo={todo} modal={this.state.modal} toggle={this.toggle} />
            </ListGroupItem>
        )
    }
}

export default Todo;