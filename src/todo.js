import React from 'react'
import { ListItem, ListItemText, Button} from '@material-ui/core';
import { db } from './firebase'


function Todo(props){
    return(
        <ListItem button key={props.todo.id}>
            <ListItemText primary={props.todo.todo} secondary="2020-July-10" />
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌ Delete Me</Button>
        </ListItem>
    )
}

export default Todo