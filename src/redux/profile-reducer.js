import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';

let initialState = {
    profile: null,
    status: '',
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
                message: action.textPost,
                countLike: 4,
            }
            return {
                ...state,
                posts: [...state.posts, newObj]
            };
        }

        case SET_USER_PROFILE: {
            return { ...state, profile: {...action.profile} };
        }

        case SET_STATUS_PROFILE: {
            return { ...state, status: action.status };
        }
        
        default: {
            return state;
        }
    }
}

export const addPostActionCreate = (textPost) => ({ type: ADD_POST, textPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatusProfile = (status) => ({ type: SET_STATUS_PROFILE, status });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getStatusProfile(userId).then(response => {
            dispatch(setStatusProfile(response.data));
        });
    }
}

export const updateStatusProfile = (status) => {
    return (dispatch) => {
        profileAPI.updateStatusProfile(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatusProfile(status));
            }
        });
    }
}

export const addPost = (formData) => {
    return (dispatch) => {
        dispatch(addPostActionCreate(formData.postText));
    }
}

export default profileReducer;

