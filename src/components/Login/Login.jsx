import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { compose } from 'redux';
import withProfileRedirect from '../../hoc/withProfileRedirect';

class LoginContainer extends React.Component {
    
    render() {
        return (
            <Login onLogin={this.props.loginUser} />
        )
    }
}

const Login = (props) => {
    
    return (
        <div>
            <h1>Login</h1>
            <ReduxFormLogin onSubmit={props.onLogin} />
        </div>
    )
}

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="email" name="email" component="input" type="text" />
            </div>
            <div>
                <Field placeholder="password" name="password" component="input" type="password" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
                <label htmlFor="rememberMe">Remember me</label>
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
 
    }
}

export default compose(
    connect(mapStateToProps, {loginUser}),
    withProfileRedirect
)(LoginContainer);