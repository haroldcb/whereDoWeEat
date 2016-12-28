import React from 'react';
import { Field, reduxForm, initialize } from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Requis'
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Votre prénom doit contenir mopins de 15 caractères'
    }
    if (!values.lastName) {
        errors.lastName = 'Requis'
    }
    if (!values.email) {
        errors.email = 'Requis'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'email invalide'
    }
    return errors
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

class RegisterForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component={renderField} type="text" placeholder="Prénom"/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component={renderField} type="text" placeholder="Nom"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component={renderField} type="email" placeholder="email"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default RegisterForm = reduxForm({
    form: 'registerForm',
    validate,
})(RegisterForm);