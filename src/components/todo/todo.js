import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import useAjax from './hooks/use-ajax'

import './todo.scss';
import axios from 'axios';

const api = 'http://localhost:3001/todo'
const ToDo = () => {
  
  const { list, setList, isLoading, setCrud} = useAjax()
  // const [list, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);


  const _addItem = async (item) => {
    console.log('item', item)
    item._id = Math.random();
    item.complete = false;
    if(!item.difficulty){
      item.difficulty = 1;
    }
    setList([...list, item]);
    let data = await axios.post(api, {
      text : item.text,
      assignee : item.assignee,
      difficulty : item.difficulty,
      complete: item.complete,
    })
    console.log('data after post', data);
  }

  const _toggleComplete = async (id) => {
    let item = list.filter(i => i._id === id)[0] || {};

    if(item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
      
    }
  }



  return (
    <>
        <header>
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col>
                <Navbar bg="dark" variant="dark">
                  <Nav className="mr-auto">
                    <Navbar.Brand>
                      <h2>
                        There are {list.filter(item => !item.complete).length} Items To Complete
                      </h2>
                    </Navbar.Brand>
                  </Nav>
                </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>

            </Col>
            <Col md={8}>
              <div>
                <TodoList list={list} handleComplete={_toggleComplete}/>
              </div>
              <section className="todo">
                {isLoading && <p>Loading...</p>}
              </section>
            </Col>
          </Row>
        </Container>
      </>
  )
}

export default ToDo;
