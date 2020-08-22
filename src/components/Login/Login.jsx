import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { compose } from 'redux';
import withProfileRedirect from '../../hoc/withProfileRedirect';
import { Input, createField } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators';

class LoginContainer extends React.Component {
    onSubmit = (formData) => {
        this.props.loginUser(formData);
    }
    render() {
        return (
            <Login onLogin={this.onSubmit} />
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
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("email", "email", Input, [required], {type: 'text'})}
            {createField("password", "password", Input, [required], {type: 'password'})}
            {createField("", "rememberMe", Input, [], {type: 'checkbox'}, "Remember me")}
            {error && <div className={"formSummaryError"}>{error}</div>}
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const ReduxFormLogin = reduxForm({
    form: 'login'
})(LoginForm);

export default compose(
    connect(null, {loginUser}),
    withProfileRedirect
)(LoginContainer);