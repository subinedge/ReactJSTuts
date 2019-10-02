import React from 'react';
import './Person.css'

const person = (props) => {
  return (
    <div className = "Person">
      <p onClick={props.click}>I am a {props.name} component and my age is {props.age}</p>
      {/* {props.children} */}

      <input type="text" onChange = {props.changed} value={props.name}/>
    </div>
  );
}

export default person;