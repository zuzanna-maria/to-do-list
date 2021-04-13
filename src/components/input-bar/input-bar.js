import React, { Component } from 'react';
import DisplayTodos from '../display-todos/display-todos.js'

class InputBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
        this.saveTodo = this.saveTodo.bind(this);
    }

    render() {
        return (<div><form id="todo-input" onSubmit={this.saveTodo}>
            <input type="text" placeholder="Todo's..." id="input-bar" ref={(a) => this.input = a} />
            <button type="submit" id="save-button">Save</button>
        </form> 
        <DisplayTodos items={this.state.items}/>
        </div>)
    }

    saveTodo(event) {
        let newItem = {
            text: this.input.value,
            key: Date.now()
          };
        
        this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
        this.input.value = "";

        console.log(this.state.items);
        event.preventDefault();
    }
}

export default InputBar;