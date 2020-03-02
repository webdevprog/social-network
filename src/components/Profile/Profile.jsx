
import React from 'react';
import cls from './profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                text={props.state.textPost}
                posts={props.state.posts}
                dispatch={props.dispatch}  
            />
        </div>
    );
}

export default Profile;