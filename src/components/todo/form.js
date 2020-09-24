import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TodoForm(props) {
  const [item, setItem] = useState({});

  const _handleInputChange = event => {
    setItem({...item, [event.target.name]: event.target.value});
  };

  const _handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    props.handleSubmit(item);
    const newItem = {};
    setItem(newItem);
  };

  return (
    <>
      <Card style={{width: '18rem'}}>
        <Card.Body>
        <h3>Add Item</h3>

        <Form onSubmit={_handleSubmit}>
          <Form.Row className="align-items-center">
            <Form.Label htmlFor="todo">
                To Do Item
            </Form.Label>
            <Form.Control style={{width: '15rem'}} className="mb-1" id="todo" placeholder="Add To Do List Item" onChange={_handleInputChange} name="text" />
          </Form.Row>
          <Form.Row className="align-items-center">
            <Form.Label htmlFor="assignee" >
              Assigned To
            </Form.Label>
            <Form.Control style={{width: '15rem'}} className="mb-1" id="assignee" placeholder="Assigned To" onChange={_handleInputChange} name="assignee"/>
          </Form.Row>
          <Form.Row className="align-items-center">
            <Form.Label htmlFor="difficulty" >
              Difficulty
            </Form.Label>
            <Form.Control style={{width: '15rem'}} className="mb-1" id="difficulty" defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
          </Form.Row>
          <Form.Row className="align-items-center">
            <Button type="submit">Add Item</Button>
          </Form.Row>
        </Form>
        
        </Card.Body>
      </Card>
    </>
  )
}


export default TodoForm;
