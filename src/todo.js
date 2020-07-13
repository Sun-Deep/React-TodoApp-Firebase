import React from 'react'
import { ListItem, ListItemText} from '@material-ui/core';


function Todo(props){
    return(
        <ListItem button>
            <ListItemText primary={props.todo} />
        </ListItem>
    )
}


export default Todo