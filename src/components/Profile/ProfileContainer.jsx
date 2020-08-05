
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfileThunkCreater } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId || this.props.authID);
    }

    render() {
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

let authRedirect = withAuthRedirect(ProfileContainer);

let withUrlDataContainerComponent = withRouter(authRedirect);

export default connect(mapStateToProps, {
    getProfile: getUserProfileThunkCreater
})(withUrlDataContainerComponent);