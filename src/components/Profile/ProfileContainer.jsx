
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunkCreater } from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        this.props.getProfile(this.props.match.params.userId || this.props.authID);
    }

    render() {
        if (!this.props.isAuth) { return <Redirect to='/login' /> }
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authID: state.auth.id,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile: getUserProfileThunkCreater
})(withUrlDataContainerComponent);