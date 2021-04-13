import React, { Component } from 'react';
import Checkbox from '../checkbox/checkbox.js'

class DisplayTodos extends Component {
    createTasks(item) {
        return <li key={item.key} style={{display: "inline"}}> <Checkbox checked="false"/> {item.text}</li>
    }
    
    render(){
        const todoItems = this.props.items;
        const listOfItems = todoItems.map(this.createTasks);
        
        return (
            <ul style={{ listStyleType: "none", whiteSpace: "nowrap", overflowX: "hidden"}} >{listOfItems}</ul>
        )
    }
}

export default DisplayTodos;