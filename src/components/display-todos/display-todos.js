import React, { Component } from 'react';
// import Checkbox from '../checkbox/checkbox.js'

class DisplayTodos extends Component {
  constructor(props){
        super(props);
        this.state = { 
            checked: false, 
            textDecoration: '',
        };
    }

    handleClick = () => {
        if (this.state.checked === false) {
            this.setState({checked: true, textDecoration: "line-through"})
        } else if (this.state.checked === true){
            this.setState({checked: false, textDecoration: ""})
        }
    }

    render(){
        return (
            <div>
                <input type="checkbox" onClick={this.handleClick}></input>
                <span style={{textDecoration: this.state.textDecoration}}> {this.props.text} </span>
            </div>
        )
    }
}

export default DisplayTodos;

