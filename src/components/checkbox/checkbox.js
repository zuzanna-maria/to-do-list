import React from 'react';

function Checkbox(props) {
      return (
        <div>
          <input type="checkbox" onChange={props.handleCheck} defaultChecked={props.state.checked}/>
        </div>
      );
  }

export default Checkbox;
