import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (WrapComponent) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) { return (<Redirect to="/login" />) }
            return <WrapComponent {...this.props} />;
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;