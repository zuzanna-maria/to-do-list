import React, { Component } from 'react';
import DisplayTodos from '../display-todos/display-todos.js'

class InputBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
    }

    saveTodo = () => {
      const element = document.getElementById('input-bar')
      const newTodos = this.state.items
      newTodos.push(element.value)
      this.setState({items: newTodos})
    }

    clearList = () => {
      this.setState({items: []})
    }


    render() {
        return (
        <div>
            <input type="text" placeholder="Todo's..." id="input-bar" />
            <button id="save-button" onClick={this.saveTodo}>Save</button>
            <a href="#" id="clear-link" onClick={this.clearList}> Clear </a>
            {this.state.items.map((todo, index) => {
              return <DisplayTodos id={index} key={index} text={todo}/>
            })}
        </div>)
    }
}

export default InputBar;
