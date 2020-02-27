
import React from 'react';
import cls from './myposts.module.scss';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <h2>My posts</h2>
            <form className={cls.formPost} action="">
                <textarea placeholder="your news" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Send" />
            </form>
            <div className={cls.posts}>
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;