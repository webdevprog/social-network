import React from 'react';
import cls from './myposts.module.scss';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    return (
        <div>
            <h2>My posts</h2>
            <ReduxFormPost onSubmit={props.addPost} />
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

let addNewPostForm = (props) => {
    return (
        <form className={cls.formPost} onSubmit={props.handleSubmit}>
            <Field placeholder="your post" name="postText" component={Textarea} validate={[required, maxLength10]} />
            <button type="submit">Send</button>
        </form>
    );
}

const ReduxFormPost = reduxForm({ form: 'addNewPost' })(addNewPostForm);

export default MyPosts;