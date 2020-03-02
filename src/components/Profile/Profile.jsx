
import React from 'react';
import cls from './profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                text={props.state.currentText}
                posts={props.state.posts}
                addPost={props.addPost}
                updateTextPost={props.updateTextPost}
            />
        </div>
    );
}

export default Profile;