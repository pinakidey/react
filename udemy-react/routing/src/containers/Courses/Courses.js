import React, { Component } from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import Course from "./../Course/Course";
import classes from './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className={classes.Courses}>
                    {
                        this.state.courses.map( course => {
                            return (
                                <Link key={course.id} to={{pathname: `/courses/${course.id}`, state: course}}>
                                    <article className={classes.Course}>{course.title}</article>
                                </Link>
                            );
                        } )
                    }
                </section>
                <Route path="/courses/:id" exact render={props => <Course {...props} />} />
            </div>
        );
    }
}

export default withRouter(Courses);