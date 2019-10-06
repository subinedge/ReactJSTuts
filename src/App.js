import React from "react";
import "./App.css";
import Person from "./Person/Person";
// import UserOutput from './UserOutput/userOutput';
// import UserInput from './UserInput/userInput';

class App extends React.Component {
  state = {
    persons: [
      { id: 'fgh', name: "Subin", age: 23 },
      { id: 'tgh', name: "Samrat", age: 24 },
      { id: 'ygh', name: "SubinEdge", age: 20 }
    ],
    showPersons: false
  };

  // state = {
  //   username : 'maximilian'
  // }

  userNameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  // switchNameHandler = newName => {
  //   // console.log('was clicked!!!');

  //   // do not mutate state

  //   // this.state.persons[0].name = "Sudheesh";

  //   this.setState({
  //     persons: [
  //       { name: newName, age: 27 },
  //       { name: "Samrat", age: 24 },
  //       { name: "Subinedge", age: 47 }
  //     ]
  //   });
  // };




  nameChangehandler = (event, id) => {

    // the name will changed for the input changed for that component.. so we have to identify the id of that particular component and add 

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    // after targeting the input value by event, then update the array.

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow}) 
  };


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;

    // above method is not a good practice, becoz.. we are trying to mutate the original state. In JS, objects, arrays are reference types. So assigning to another variable is nothing but the reference object is pointing to another variable.

    // So , its better to duplicate the array by spread operator and mutate that.

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }


  render() {
    
  const styles = {
    backgroundColor:'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '10px',
    cursor: 'pointer'
  };


    let persons = null;

    if(this.state.showPersons) {

      persons = (
          <div>

          {/* rather than creating each similar component, we can map those similar components into 1, so that when we add an extra component it wont break and also no need to pass the state data manually to each component. This will be useful in blog posts. */}

        {/* IMPORTANT */}


             {this.state.persons.map( (person, index) => {
              return <Person
              click = {this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key ={person.id}
              changed ={(event) => this.nameChangehandler(event, person.id)}/>
            })}
            




            {/* <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
              My dream is to become a Web developer
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangehandler}
              click={this.switchNameHandler.bind(this, "Sudhakaran")}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            /> */}
          </div>
      );

      styles.backgroundColor= 'red';
      styles.color = 'white';
      
    }

    let classes = [];

    if(this.state.persons.length <=2) {
      classes.push('red');
    }

    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    if(this.state.persons.length === 0) {
      classes.push('content');
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1>REACT IS WORKING !!</h1>
          <p className={classes.join(' ')}>React Component Styling</p>

          {/* pass arguments while calling function */}
          {/* <button onClick={this.switchNameHandler.bind(this, 'Bindhu')}>Switch Name</button> */}
          <button style = {styles} onClick={this.togglePersonsHandler}>Toggle Name</button>

          {persons}

          <br/><br/><br/>

          <hr/>


          {/* <UserInput usernameHandle = {this.userNameHandler} userName = {this.state.username}/>
          <UserOutput userName = "subin"/>
          <UserOutput userName = {this.state.username} />
          <UserOutput userName = {this.state.username}/> */}
        </header>
      </div>
    );
    
  }
}


export default App;
