import React, { Component } from 'react';

class DisplayTodos extends Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>
    }
    
    render(){
        const todoItems = this.props.items;
        const listOfItems = todoItems.map(this.createTasks);
        
        return (
            <ul>{listOfItems}</ul>
        )
    }
}

export default DisplayTodos;