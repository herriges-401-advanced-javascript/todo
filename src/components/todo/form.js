import React, { useEffect, useState } from 'react';

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
        <h3>Add Item</h3>
        <form onSubmit={_handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={_handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={_handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
  )
}


export default TodoForm;
