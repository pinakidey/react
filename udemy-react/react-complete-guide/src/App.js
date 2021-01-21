import styles from './App.css';
import CharComponent from "./components/CharComponent";
import React, { useState, useRef} from 'react';
import ValidationComponent from "./components/ValidationComponent";
import styled, {css} from "styled-components";

const App = () => {

  const [inputText, setInputText] = useState("");
  const nameForm = useRef(null);
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: ${props => props.primary ? 'white' : 'violet'};
    margin: 1em;
    padding: 0.5rem;
    cursor: pointer;
    ${props => props.primary && css`
      background: palevioletred;
    `}
  `
  const Container = styled.div`
    text-align: center;
  `

  const removeChar = (index) => {
    console.log(`Deleting char at index ${index}`);
    const splitInput = inputText.split('');
    splitInput.splice(index, 1);
    setInputText(splitInput.join(''));
  }

  return (
      <div className={styles.App}>
        <div className={styles.AppIntro}>
          <form ref={nameForm}>
            <input type="text" name="name"/>
          </form>
          <Container>
            <Button onClick={() => {setInputText(""); nameForm.current["name"].value = ""}}>Clear</Button>
            <Button primary onClick={() => setInputText(nameForm.current["name"].value)}>Set</Button>
          </Container>
          {inputText && <p>Length: {inputText.length}</p>}
          {inputText && <ValidationComponent inputLength={inputText.length}/>}
          {inputText && inputText.split('').map((char, index) => <CharComponent key={index} char={char} remove={() => removeChar(index)}/>)}
        </div>
      </div>
  );
}

export default App;
