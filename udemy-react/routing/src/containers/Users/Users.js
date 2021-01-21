import React, { Component } from 'react';
import { withRouter } from "react-router";

class Users extends Component {
    render () {
        return (
            <div>
                <h1>The Users Page</h1>
            </div>
        );
    }
}

export default withRouter(Users);