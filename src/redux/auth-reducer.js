import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, login, email, isAuth } });

export const authUserThunkCreater = () => {
    return (dispatch) => {
        return authAPI.singInUser().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
    }
}


export const loginUser = (dataLogin) => {
    return (dispatch) => {
        authAPI.login(dataLogin).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authUserThunkCreater());
            } else {
                dispatch(stopSubmit('login', {_error: "Some error"}));
            }
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;

