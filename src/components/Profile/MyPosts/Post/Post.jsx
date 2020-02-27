
import React from 'react';
import cls from './post.module.scss';

const Post = (props) => {
    return (
        <div className={cls.item}>
            <img src="" alt="" />
            <div>{props.message}</div>
            <div>
                <span>like {props.countLike}</span>
            </div>
        </div>
    );
}

export default Post;