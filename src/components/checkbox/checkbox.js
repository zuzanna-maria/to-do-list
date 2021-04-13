import React, { Component } from 'react';

class Checkbox extends Component {
    constructor(props){
        super(props);
        this.state = { checked: props.isChecked };
    }

    handleCheck = () => {
        this.setState({ checked: this.state.checked });
    }

    render() {
      return (
        <div>
          <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
        </div>
      );
    }
}

export default Checkbox;