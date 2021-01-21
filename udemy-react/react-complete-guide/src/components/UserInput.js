import React from "react";

const UserInput = (props) => {
    return (
        <p>
            <input type="text" onChange={(event) => props.changeHandler(event.target.value)} value={props.username}/>
        </p>
    )
}

export default UserInput;