import React, { Component } from 'react';
//import Checkbox from '../checkbox/checkbox.js'

class DisplayTodos extends Component {

  constructor(props){
      super(props);
      this.state = { checked: false };
      this.createCheckbox = this.createCheckbox.bind(this)
  }

  handleCheck = () => {
      this.setState({ checked: this.state.checked });
  }



  createCheckbox() {
    return (
      //<div>
        <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
      //</div>
    )
  }

  createTasks(item) {

        return <li key={item.key} style={{display: "inline", textDecoration: "line-through"}}> {this.createCheckbox} {item.text}</li>
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
