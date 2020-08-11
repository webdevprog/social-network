
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatusProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userId;

        if (!userID) {
            userID = this.props.authID;
        }

        this.props.getUserProfile(userID);
        this.props.getStatusProfile(userID);
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authID: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatusProfile,
    }),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);