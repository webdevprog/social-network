
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatusProfile, updateStatusProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId || this.props.authID);
        this.props.getStatusProfile(this.props.match.params.userId || this.props.authID);
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
        updateStatusProfile
    }),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);