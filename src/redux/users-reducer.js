const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const GET_TOTAL_USERS = 'GET-TOTAL-USERS';

let initialState = {
    users: [],
    totalUsers: 0,
    pageCurrent: 1,
    pageSize: 40,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_TOGGLE: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            };
        }
        case GET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.total
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                pageCurrent: action.currentPage
            };
        }
        default: {
            return state;
        }
    }
}

export let followToggleActionCreate = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export let setUsersActionCreate = (users) => ({ type: SET_USERS, users });
export let getTotalUsersActionCreate = (total) => ({ type: GET_TOTAL_USERS, total });
export let setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export default usersReducer;