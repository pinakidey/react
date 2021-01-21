import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: inline-block;
    padding: 2rem;
    text-align: center;
    margin: 1rem;
    border: 1px solid black;
    cursor: pointer;
    &:hover {
        background-color: lightblue;
    }
    @media (min-width: 500px) {
        color: red;
        font-size: 2rem;
    }
`

const CharComponent = (props) => {
    return (
        <StyledDiv onClick={props.remove}>{props.char}</StyledDiv>
    )
}

export default CharComponent;