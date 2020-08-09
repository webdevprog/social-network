import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withProfileRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) return <Redirect to="/profile" />
            return <Component {...this.props} />;
        }
    }

    let authRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return authRedirectComponent;
}

export default withProfileRedirect;