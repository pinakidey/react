import React, { Component } from 'react';
import classes from './App.css';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit'
import ThemeSelector from './components/ThemeSelector/ThemeSelector'
import withClass from './hoc/withClass';
import ThemeContext from './ThemeContext';
import Themes from "./Themes";


class App extends Component {
  constructor(props) {
    console.log("[App.js] Constructor");
    super(props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      theme: "green"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate", prevProps, prevState, snapshot);
    return null;
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => { // update state synchronously
      return {
        persons: persons
      }
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  themeSelectionHandler = (event) => {
    console.log(event.target.value);
    this.setState({theme: event.target.value});
  }

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
      );
    }

    return (
      <ThemeContext.Provider value={Themes[this.state.theme]}>
        <ThemeSelector theme={this.state.theme} themes={Themes} onSelect={this.themeSelectionHandler}/>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </ThemeContext.Provider>
    );
  }
}

export default withClass(App, classes.App);
