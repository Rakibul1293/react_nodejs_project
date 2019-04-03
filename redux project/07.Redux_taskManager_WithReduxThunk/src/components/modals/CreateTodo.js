import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { connect } from 'react-redux';
import shortId from 'shortid';
// import { bindActionCreators } from 'redux';
// import { toggleModal } from '../../store/actions/modalActions';
import { toggleModal as toggle } from '../../store/actions/modalActions';
import { addTodo } from '../../store/actions/todoActions';

class CreateTodo extends Component {

    state = {
        title: '',
        description: '',
        error: {}
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()

        if (!this.state.title) {
            let error = {
                title: 'Please Enter a Valid Title'
            }
            this.setState({
                error
            })
        } else {
            this.setState({
                error: {}
            })
            this.props.addTodo({
                title: this.state.title,
                description: this.state.description,
                id: shortId.generate(),
                isComplete: false
            })
            this.props.toggle()
        }
    }

    render() {
        console.log(this.props.modal);
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>
                    {"  "}
                    Create a New Todo{"  "}
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.submitHandler}>
                        <FormGroup>
                            <Label for='title'> Enter Your Task Title </Label>
                            <Input onChange={this.changeHandler} invalid={this.state.error.title && true} name='title' id='title' />
                            <FormFeedback> {this.state.error.title} </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'> Describe Your Tasks </Label>
                            <Input onChange={this.changeHandler} type='textarea' name='description' id='description' />
                        </FormGroup>
                        <Button color='primary'> Create Task </Button>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}


const mapStateToProps = state => ({ modal: state.modal });
// const mapDispatchToProps = dispatch => {
// return bindActionCreators({ toggle: toggleModal }, dispatch)
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
export default connect(mapStateToProps, { toggle, addTodo })(CreateTodo);