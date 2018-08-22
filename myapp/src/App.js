import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
  	persons: [
  		{ id: 'asfa1', name: 'Max', age: 28 },
  		{ id: 'asfa2', name: 'Manu', age: 29},
  		{ id: 'asfa3', name: 'Stephanie', age: 26}
  	]
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    // in ES5: const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

  	this.setState({
  		persons: persons
  	})
  }

  deletePersonHandler = (personIndex) => {
    // in ES5: const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
  	const style = {
  		backgroundColor:'green',
      color: 'white',
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer'
  	};

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                name={person.name} 
                age={person.age} />
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = [];

    if (this.state.persons.length <=2) {
      classes.push('red'); // classes=['red']
    }
    if (this.state.persons.length <=1) {
      classes.push('bold'); // classes=['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I`m a React App.</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
        	style={style}
        	onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\`m a React App'));
  }
}

export default App;