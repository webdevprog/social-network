import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            debugger
            if (!this.props.isAuth) return <Redirect to="/login" />
            return <Component {...this.props} />;
        }
    }

    let authRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return authRedirectComponent;
}

export default withAuthRedirect;