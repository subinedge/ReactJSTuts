import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <input type="text" onChange = {props.usernameHandle} value = {props.userName}/>
    </div>
  );
}


export default userInput;