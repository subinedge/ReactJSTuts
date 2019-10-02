import React from 'react';

const CharComponent = (props) => {

  const styles = {
    display: 'inline-block',
    padding: '20px',
    margin:'16px',
    border:'2px solid black',
    textAlign: 'center'
  }

  return(
    <div style = {styles} onClick = {props.clicked}>
      <p>{props.character}</p>
    </div>
  );
}

export default CharComponent;