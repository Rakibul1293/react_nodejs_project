import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleModal as toggle } from '../../store/actions/modalActions';
import { filter } from '../../store/actions/todoActions';

class TopNav extends Component {
    render() {
        let { filter, toggle } = this.props
        return (
            <ButtonGroup className='text-center'>
                <Button onClick={() => filter('ALL')}> All </Button>
                <Button onClick={() => filter('ACTIVE')}> Active </Button>
                <Button onClick={() => filter('COMPLETED')}> Completed </Button>
                <Button
                    onClick={toggle}
                    color='success'>
                    ADD
                </Button>
            </ButtonGroup>
        )
    }
}

export default connect(null, { toggle, filter })(TopNav);