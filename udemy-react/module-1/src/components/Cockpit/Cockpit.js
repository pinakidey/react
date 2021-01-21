import React, {useEffect, useRef, useContext} from "react";
import classes from "./Cockpit.css";
import ThemeContext from './../../ThemeContext';

const cockpit = props => {
    const buttonRef = useRef();
    const theme = useContext(ThemeContext);
    useEffect(() => {
        console.log("[Cockpit.js] useEffect - persons changed");
    }, [props.persons]);

    useEffect(() => {
        buttonRef.current.click();
        return () => {
            console.log("[Cockpit.js] useEffect - cleanup before unmount");
        }
    }, []);

    useEffect(() => {
        return () => {
            console.log("[Cockpit.js] useEffect - cleanup after update");
        }
    });

    const assignedClasses = [];
    /* let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    } */
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div>
            <h1>Person Manager</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button style={{background: theme.background, color: theme.foreground }} onClick={props.clicked} ref={buttonRef}>
                Toggle Persons
            </button>
        </div>
    )
}

export default cockpit;