import { authUserThunkCreater } from "./auth-reducer";

const INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS';


let initialState = {
    initialize: true
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialize: action.initialize
            };
        }
        default: {
            return state;
        }
    }
}

export const initializeSuccess = (initialize) => ({ type: INITIALIZE_SUCCESS, initialize });

export const initialize = () => (dispatch) => {

    let promise = dispatch(authUserThunkCreater());
    
    promise.then(()=> {
        dispatch(initializeSuccess(false))
    })
}

export default appReducer;

