
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatusProfile, updateStatusProfile, savePhoto } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshUser() {
        let userID = this.props.match.params.userId;

        if (!userID) {
            userID = this.props.authID;
        }

        this.props.getUserProfile(userID);
        this.props.getStatusProfile(userID);
    }

    componentDidMount() {
        this.refreshUser();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshUser();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                owner={!!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
            />
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
        updateStatusProfile,
        savePhoto
    }),
    withRouter,
    withAuthRedirect
)
    (ProfileContainer);