import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'profile/SET_STATUS_PROFILE';
const SET_PHOTO_SUCCESS = 'profile/SET_PHOTO_SUCCESS';

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
            return { ...state, profile: { ...action.profile } };
        }

        case SET_STATUS_PROFILE: {
            return { ...state, status: action.status };
        }

        case SET_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos} };
        }

        default: {
            return state;
        }
    }
}

export const addPostActionCreate = (textPost) => ({ type: ADD_POST, textPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatusProfile = (status) => ({ type: SET_STATUS_PROFILE, status });
export const setPhotoSuccess = (photos) => ({ type: SET_PHOTO_SUCCESS, photos });


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.setUserProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatusProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatusProfile(userId);
    dispatch(setStatusProfile(response.data));
}

export const updateStatusProfile = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatusProfile(status);
    if (response.resultCode === 0) {
        dispatch(setStatusProfile(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch) => {
    let userId = profile.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('profileData', { _error: "Some error" }));
    }
}

export const addPost = (formData) => (dispatch) => dispatch(addPostActionCreate(formData.postText));

export default profileReducer;

