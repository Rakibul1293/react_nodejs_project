import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import TopNav from './nav/TopNav';
import CreateTodo from './modals/CreateTodo';
import Todos from './todo/Todos';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <TopNav />
            <CreateTodo />
            <Todos />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;



/*
    All   Action   Finished
    All render Blue Green

    Title
    Description
    Expire Date
    Tag Color
*/

/*
    Todo[]
      -GET All TODO
      -GET Active TODO
      -GET FINISHED TODO
      -GET RED

    Todo[]
      -GET All TODO
      -ADD TODO
      -DELETE TODO
      -SELECTED TODO
*/