const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isFetch: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.authData,
                isFetch: true
            };
        }
        default: {
            return state;
        }
    }
}

export let setAuthUserData = (id, login, email) => ({ type: SET_AUTH_USER_DATA, authData: {id, login, email} });

export default authReducer;

