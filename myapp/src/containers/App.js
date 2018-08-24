import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxility';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  state = {
  	persons: [
  		{ id: 'asfa1', name: 'Max', age: 28 },
  		{ id: 'asfa2', name: 'Manu', age: 29},
  		{ id: 'asfa3', name: 'Stephanie', age: 26}
  	],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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

    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }
    
    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\`m a React App'));
  }
}

export default withClass(App, classes.App);
