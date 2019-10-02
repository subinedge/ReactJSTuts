import React from "react";
import "./App.css";
import Validation from './Validation';
import CharComponent from './CharComponent';

class Assignment extends React.Component {

  state = {
    userInput : ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput:event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = [...this.state.userInput.split('')];
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput:updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent character = {ch} key ={index} 
      clicked ={this.deleteCharHandler.bind(this, index)}/>
    });


    return(
      <div className = "App">
        <h1>Added another class component!!</h1>

        <input type="text" onChange = {this.inputChangeHandler} 
        defaultValue={this.state.userInput} />

        <p>{this.state.userInput}</p>

        <Validation userInputLength = {this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default Assignment;