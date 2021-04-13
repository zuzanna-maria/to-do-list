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
    // var msg;
    //   if (this.state.checked) {
    //     msg = "checked";
    //   } else {
    //     msg = "unchecked";
    //   }
      return (
        <div>
          <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
          {/* <p>this box is {msg}.</p> */}
        </div>
      );
    }
}

export default Checkbox;