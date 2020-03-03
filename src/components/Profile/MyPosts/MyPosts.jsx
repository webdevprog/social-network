
import React from 'react';
import cls from './myposts.module.scss';
import Post from './Post/Post';
import {updateTextPostActionCreate, addPostActionCreate} from '../../../redux/state'

const MyPosts = (props) => {

    let addPost = (e) => {
        e.preventDefault()
        props.dispatch(addPostActionCreate())
    }

    let handleChange = (e) => {
        props.dispatch(updateTextPostActionCreate(e.target.value));
    }

    return (
        <div>
            <h2>My posts</h2>
            <form className={cls.formPost} action="" onSubmit={addPost}>
                <textarea value={props.text} onChange={handleChange} placeholder="your news" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Send" />
            </form>
            <div className={cls.posts}>
                {
                    props.posts.map(post => (
                        <Post id={post.id} message={post.message} countLike={post.countLike} />
                    ))
                }
            </div>
        </div>
    );
}

export default MyPosts;