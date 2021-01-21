import React from "react";

const themeSelector = (props) => {
    const themeKeys =  Object.keys(props.themes);
    return (
        <label>
            Pick your theme:{" "}
            <select value={props.theme} onChange={props.onSelect}>
                {themeKeys.map((key,index) => { //key is string
                    return <option key={index} value={key}>{`${key[0].toUpperCase()}${key.slice(1)}`}</option>
                })}
            </select>
        </label>
    );
}

export default themeSelector;