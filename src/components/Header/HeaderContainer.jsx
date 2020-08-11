
import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authUserThunkCreater, logoutUser } from '../../redux/auth-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return (<Header {...this.props} />);
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default compose(
    connect(mapStateToProps, {
        authUser: authUserThunkCreater,
        logoutUser
    })
)(HeaderContainer);