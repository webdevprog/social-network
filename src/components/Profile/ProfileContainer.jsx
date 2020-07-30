
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userId || 2;
        profileAPI.setUserProfile(userID).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});
let withUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent);