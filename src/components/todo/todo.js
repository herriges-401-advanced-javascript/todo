import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar'

import './todo.scss';
import axios from 'axios';

const api = 'http://localhost:3001/todo'
const ToDo = () => {
  
  const [list, setList] = useState([]);

  const _addItem = (item) => {
    console.log('item', item)
    item._id = Math.random();
    item.complete = false;
    if(!item.difficulty){
      item.difficulty = 1;
    }
    setList([...list, item]);
    axios.post(api, {
      text : item.text,
      assignee : item.assignee,
      difficulty : item.difficulty,
      complete: item.complete,
      id: item._id,
    })
  }

  const _toggleComplete = async (id) => {
    let item = list.filter(i => i._id === id)[0] || {};

    if(item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
      
    }
  }

  useEffect(async () => {
    const response = await axios.get(api)
    console.log('api data', response.data);
    setList(response.data || []);
  }, [])
  

  return (
    <>
        <header>
          
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={_addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={_toggleComplete}
            />
          </div>
        </section>
      </>
  )
}

export default ToDo;
