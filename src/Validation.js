import React from 'react';

const Validation = (props) => {

  let validationMessage = 'Text too long enough';

  if(props.userInputLength <= 5) {
    validationMessage = 'Text too short !';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
}

export default Validation;