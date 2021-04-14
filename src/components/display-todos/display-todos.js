import React, { Component } from 'react';
import Checkbox from '../checkbox/checkbox.js'

class DisplayTodos extends Component {
    constructor(props){
        super(props);
        this.state = { checked: false };
    }

    handleCheck = () => {
        this.setState({ checked: this.state.checked });
    }

    createTasks(item) {
        return <li key={item.key}> <Checkbox checked={this.state.checked} onClick={() => this.handleClick()}/> {item.text} </li>
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
