
import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authUserThunkCreater } from '../../redux/auth-reducer';

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
        isFetch: state.auth.isFetch,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    authUser: authUserThunkCreater
})(HeaderContainer);