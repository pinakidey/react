import React, {useRef, useEffect, useContext} from 'react';
import withClass from './../../../hoc/withClass'
import classes from './Person.css';
import PropTypes from "prop-types";
import ThemeContext from './../../../ThemeContext';

const person = props => {

  const theme = useContext(ThemeContext);
  const nameForm = useRef(null);
  let inputElement = null;

  useEffect(() => {
    if(inputElement) {
      console.log(inputElement);
      inputElement.focus();
      console.log("Focus: on");
    }
  }, [inputElement])

  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        ref={(inputEl) => {inputElement = inputEl}}
      />
      <form ref={nameForm}>
        <input type="text" name="name"/>
      </form>
      <button
        style={{background: theme.background, color: theme.foreground}}
        onClick={() => console.log(nameForm.current["name"].value)}>
          Set
      </button>
    </div>
  );
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(person, classes.Person);
