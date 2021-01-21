import React from "react";

const UserOutput = (props) => {
    const style = {
        "font-weight": "600"
    };
    return (
        <div>
            <p style={style}>User Details</p>
            <p>Username: {props.username}</p>
        </div>
    )
}

export default UserOutput;