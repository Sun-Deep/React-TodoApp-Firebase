import React, {useState} from 'react';
import {List, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './todo'
import './App.css';

function App() {

  const [todos, setTodos] = useState(['Task 1', 'Task 2'])
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    setTodos(pre =>(
      [...pre, input]
    ))
    setInput('')
  }

  return (
    <div className="App">
      <h1>Welcome to React Todo App!!</h1>
      <form>
        <FormControl>
          <InputLabel>Enter Todo:</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      <List component="nav" aria-label="main mailbox folders" >
        {
          todos.map(todo => (
            <Todo todo={todo} />
          ))
        }
      </List>
    </div>
  );
}

export default App;
