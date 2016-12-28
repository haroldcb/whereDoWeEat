import React from "react";
import { Link } from 'react-router';

export default class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Link to="login">Login</Link>
                <Link to="register">Register</Link>
            </div>
    );
    }
}