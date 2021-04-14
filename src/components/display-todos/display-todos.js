import React, { Component } from 'react';
//import Checkbox from '../checkbox/checkbox.js'

class DisplayTodos extends Component {

  constructor(props){
      super(props);
      this.state = { checked: false };
      this.createCheckbox = this.createCheckbox.bind(this)
      this.textDecoration = '';
  }

  handleCheck = () => {
    if (this.state.checked === false) {
      this.setState({checked: true})
      this.textDecoration = "line-through"
      console.log(this.textDecoration)
    } else if (this.state.checked === true){
      this.setState({checked: false})
      this.textDecoration = ""
      console.log("unchecked")
    }
  }



  createCheckbox(){
    return (

        <input type="checkbox" onChange={this.handleCheck} />

    )
  }

  createTasks = (item) => {
        let checkbox = <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>

        return <li key={item.key} style={{display: "inline", textDecorationLine: this.textDecoration}}> {checkbox} {item.text}</li>
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
