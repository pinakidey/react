import React from 'react';
import {useLocation} from "react-router-dom";

const Course = (props) => {
        const location = useLocation();
        console.log(location);
        if(!props.location.state) {
            return (
                <div>
                    <p>Not found!</p>
            </div>
            );
        }
        return (
            <div>
                <h1>{props.location.state.title}</h1>
                <p>You selected the Course with ID: {props.location.state.id}</p>
            </div>
        );
}

export default Course;