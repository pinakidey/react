import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { createBrowserHistory } from "history";
import { Menu as MenuIcon } from '@material-ui/icons';
import {BrowserRouter as Router, NavLink, Switch, Route, Redirect} from "react-router-dom";
//import {Switch, Route, Redirect} from "react-router";
import classes from "./App.css";
import Courses from './containers/Courses/Courses';
import Course from "./containers/Course/Course";
import NotFound from "./containers/NotFound/NotFound";
import React from 'react';
import Users from './containers/Users/Users';

const App = () => {

  const history = createBrowserHistory();

  const renderAppBar = () => {
    return (
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
                <NavLink to="/" exact >Routing Assignment</NavLink>
          </Typography>
          <NavLink to="/users" exact activeClassName={classes.active}>Users</NavLink>
          <NavLink to="/courses" activeClassName={classes.active}>Courses</NavLink>
        </Toolbar>
      </AppBar>
    );
  }

  const renderProblemStatement = () => {
    return (
      <ol style={{textAlign: 'left'}}>
        <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
        <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
        <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
        <li>Pass the course ID to the "Course" page and output it there</li>
        <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
        <li>Load the "Course" component as a nested component of "Courses"</li>
        <li>Add a 404 error page and render it for any unknown routes</li>
        <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
      </ol>
    );
  }

  return (
    <div className={classes.App}>
      <Router history={history}>
        {renderAppBar()}
        <Switch>
          <Redirect from="/all-courses" to="/courses" />
          <Route path="/users" exact render={props => <Users {...props} />} />
          <Route path="/courses" render={props => <Courses {...props} />} />
          <Route path="/" exact render={() => renderProblemStatement()} />
          <Route render={() => <NotFound/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
