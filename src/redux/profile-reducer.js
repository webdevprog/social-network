const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    profile: null,
    textPost: '',
    posts: [
        { id: 1, message: "Hello, everyone", countLike: 3 },
        { id: 2, message: "Hello, everybody", countLike: 4 },
        { id: 3, message: "This is my code.", countLike: 8 },
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newObj = {
                id: 5,
                message: state.textPost,
                countLike: 4,
            }
            return {
                ...state,
                posts: [...state.posts, newObj],
                textPost: ''
            };
        }
        case UPDATE_TEXT_POST: {
            return { ...state, textPost: action.newText };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: {...action.profile} };
        }
        
        default: {
            return state;
        }
    }
}

export let addPostActionCreate = () => ({ type: ADD_POST });
export let updateTextPostActionCreate = (text) => ({ type: UPDATE_TEXT_POST, newText: text });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;

