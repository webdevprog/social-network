const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newObj = {
                id: 5,
                message: state.textPost,
                countLike: 4,
            }
            state.posts.push(newObj);
            state.textPost = '';
            return state;
        }
        case UPDATE_TEXT_POST: {
            state.textPost = action.newText;
            return state;
        }
        default: {
            return state;
        }
    }
}

export let addPostActionCreate = () => ({ type: ADD_POST });
export let updateTextPostActionCreate = (text) => ({ type: UPDATE_TEXT_POST, newText: text });

export default profileReducer;

