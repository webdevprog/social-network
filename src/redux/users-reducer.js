const SEARCH_USER = 'SEARCH-USER ';
const SHOW_MORE = 'SHOW-MORE';
const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [],
    prevUsers: 4,
    stepUsers: 2
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_USER: {
            return {
                ...state
            };
        }
        case SHOW_MORE: {
            return {
                ...state,
                prevUsers: state.users.length > action.usersLength ? action.usersLength + state.stepUsers : state.prevUsers
            };
        }
        case FOLLOW_TOGGLE: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id == action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        }
        default: {
            return state;
        }
    }
}

export let searchUsersActionCreate = () => ({ type: SEARCH_USER });
export let showMoreActionCreate = (usersLength) => ({ type: SHOW_MORE, usersLength });
export let followToggleActionCreate = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export let setUsersActionCreate = (users) => ({ type: SET_USERS, users });

export default usersReducer;