import React from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/userOutput';
import UserInput from './UserInput/userInput';

class App extends React.Component {
  // state = {
  //   persons : [
  //     {name:'Subin', age:23},
  //     {name:'Samrat', age:24},
  //     {name:'SubinEdge', age:20}
  //   ]
  // }

  state = {
    username : 'maximilian'
  }


  userNameHandler = (event) => {
    this.setState({
      username : event.target.value
    });
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!!!');

    // do not mutate state

    // this.state.persons[0].name = "Sudheesh"; 

    this.setState({
      persons : [
        {name:newName, age: 27},
        {name:'Samrat', age: 24},
        {name:'Subinedge', age: 47}
      ]
    })
  }


  nameChangehandler = (event) => {
    this.setState({
      persons : [
        {name:'Subin', age: 27},
        {name:event.target.value, age: 24},
        {name:'Subinedge', age: 47}
      ]
    })
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            REACT IS WORKING !!
          </h1>
          {/* <button onClick={this.switchNameHandler.bind(this, 'Bindhu')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}>My dream is to become a Web developer</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed = {this.nameChangehandler}
            click = {this.switchNameHandler.bind(this, 'Sudhakaran')}/>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
          
          <UserInput usernameHandle = {this.userNameHandler} userName = {this.state.username}/>
          <UserOutput userName = "subin"/>
          <UserOutput userName = {this.state.username} />
          <UserOutput userName = {this.state.username}/>

        </header>
      </div>
    );
  }

  
}

export default App;
