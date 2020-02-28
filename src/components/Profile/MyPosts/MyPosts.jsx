
import React from 'react';
import cls from './myposts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            <h2>My posts</h2>
            <form className={cls.formPost} action="">
                <textarea placeholder="your news" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Send" />
            </form>
            <div className={cls.posts}>
            {
                props.posts.map(post => (
                    <Post id={post.id} message={post.message} countLike={post.countLike}/>
                ))
            }
            </div>
        </div>
    );
}

export default MyPosts;