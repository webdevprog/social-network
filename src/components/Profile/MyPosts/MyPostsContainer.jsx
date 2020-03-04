
import React from 'react';
import MyPosts from './MyPosts';
import { updateTextPostActionCreate, addPostActionCreate } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreate())
    }

    let updateTextPost = (text) => {
        props.store.dispatch(updateTextPostActionCreate(text));
    }

    return (
        <MyPosts
            text={state.textPost}
            posts={state.posts}
            updateTextPost={updateTextPost}
            addPost={addPost}
        />
    );
}

export default MyPostsContainer;