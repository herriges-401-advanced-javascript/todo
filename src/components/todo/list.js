import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

class TodoList extends React.Component {

  render() {
    return (
      <ListGroup>
        {this.props.list.map(item => (
          <ListGroup.Item key={item._id}>
            <Card key={item._id}>
              <Card.Body key={item._id}>
                <Row>
                  <Col>
                  <Badge style={{height:'50%', margin:'0px 30px 0px 0px'}} pill variant={item.complete ? "success" : "danger"} onClick={() => this.props.handleComplete(item._id)}>{item.complete ? 'Pending' : 'Complete'}</Badge>
                  </Col>
                  <Col xs={6}>
                  <p style={{display:'inline-block'}}>{item.assignee}</p>
                  </Col>
                  <Col>
                  <Badge style={{height:'50%', margin:'0px 30px 0px 0px'}} pill variant="danger" onClick={() => this.props.delete(item._id)}>Delete</Badge>
                  </Col>
                </Row>
                <span>
                  {item.text}
                </span>
                
              </Card.Body>
            </Card>
          </ListGroup.Item>    
        ))}
      </ListGroup>
    );
  }
}

export default TodoList;
