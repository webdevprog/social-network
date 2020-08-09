import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class LoginContainer extends React.Component {

    render() {
        return (
            <Login />
        )
    }
}

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <ReduxFormLogin />
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name="Login" component="input" type="text" />
            </div>
            <div>
                <Field placeholder="password" name="password" component="input" type="password" />
            </div>
            <div>
                <Field name="remember" component="input" type="checkbox" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const ReduxFormLogin = reduxForm({
    form: 'login'
})(LoginForm);

let mapStateToProps = (state) => {
    return {
        loginData: ''
    }
}

export default connect(mapStateToProps, {})(LoginContainer);