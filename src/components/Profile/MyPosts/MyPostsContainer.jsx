import { updateTextPostActionCreate, addPostActionCreate } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textPost: state.profilePage.textPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreate())
            
        },
        updateTextPost: (text) => {
            dispatch(updateTextPostActionCreate(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;