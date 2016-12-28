import React from 'react';
import RegisterForm from './registerForm';
import actions from '../state/actions';

export default class RegisterPage extends React.Component {
    handleSubmit = (values) => {
        console.log(values);
        this.props.dispatch(actions.register.registerUser(values));
    };

    render() {
        console.log(this.props);
        console.log("state", this.state);
        console.log("render", actions);
        return (
            <div>
                <p>Register</p>
                <RegisterForm onSubmit={this.handleSubmit}/>
                <p>{this.props.message}</p>
            </div>
        );
    }
}