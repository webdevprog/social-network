import React from 'react';
import cls from './myposts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {

    let onAddPost = (e) => {
        e.preventDefault()
        props.addPost()
    }

    let onUpdateTextPost = (e) => {
        props.updateTextPost(e.target.value)
    }
    
    return (
        <div>
            <h2>My posts</h2>
            <form className={cls.formPost} action="" onSubmit={onAddPost}>
                <textarea value={props.textPost} onChange={onUpdateTextPost} placeholder="your news" name="" id="" cols="30" rows="10"></textarea>
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