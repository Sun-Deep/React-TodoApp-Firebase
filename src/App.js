import React, {useState, useEffect} from 'react';
import {List, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './todo'
import './App.css';
import { db } from './firebase'
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {

    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})))
    })

  }, [])

  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
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
        
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
      <List component="nav" aria-label="main mailbox folders">
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
