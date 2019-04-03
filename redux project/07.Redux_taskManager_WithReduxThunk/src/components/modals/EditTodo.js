import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { editTodo } from '../../store/actions/todoActions';

class EditTodo extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         title: '',
    //         description: ''
    //     }
    //     this.setState({
    //         title: this.props.todo.title,
    //         description: this.props.todo.description
    //     })
    // }

    state = {
        title: '',
        description: ''
    }

    componentWillReceiveProps() {
        this.setState({
            title: this.props.todo.title,
            description: this.props.todo.description
        })
    }

    changeHandler = event => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // static getDrivedStateFromProps(props) {
    //     // if (props.todo) {
    //     //     return {
    //     //         title: props.todo.title,
    //     //         description: props.todo.description
    //     //     }
    //     // }

    //     // console.log(props)
    //     // if (props.title) {
    //     //     return {
    //     //         // title: props.title
    //     //         title: props.todo.title
    //     //     }
    //     // }

    //     if (props.todotitle !== state.title || props.todo.description) {
    //         return {
    //             title: props.todo.title,
    //             description: props.todo.description
    //         }
    //     }

    //     return null
    // }

    submitHandler = event => {
        event.preventDefault()
        this.props.editTodo({
            ...this.props.todo,
            title: this.state.title,
            description: this.state.description
        })
        this.props.toggle()
    }

    render() {
        console.log(this.props.modal);
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    Update Todo
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.submitHandler}>
                        <FormGroup>
                            <Label for='title'> Enter Your Task Title </Label>
                            <Input onChange={this.changeHandler} type='text' name='title' id='title' value={this.state.title} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'> Describe Your Tasks </Label>
                            <Input onChange={this.changeHandler} type='textarea' name='description' id='description' value={this.state.description} />
                        </FormGroup>
                        <Button color='primary'> Create Task </Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default connect(null, { editTodo })(EditTodo);