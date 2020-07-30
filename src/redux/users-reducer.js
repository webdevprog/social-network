const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const GET_TOTAL_USERS = 'GET-TOTAL-USERS';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING ';
const FOLLOWING_PROCESS = 'FOLLOWING-PROCESS '

let initialState = {
    users: [],
    totalUsers: 0,
    pageCurrent: 1,
    pageSize: 9,
    isFetching: true,
    followingInProcess: []
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
                users: [...action.users,]
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
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: !action.isFetching
            };
        }
        case FOLLOWING_PROCESS: {
            return {
                ...state,
                followingInProcess: action.followingInProcess ?
                state.followingInProcess.filter(item => item !== action.userID) :
                [...state.followingInProcess, action.userID]
            };
        }
        default: {
            return state;
        }
    }
}

export let followToggle = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let getTotalUsers = (total) => ({ type: GET_TOTAL_USERS, total });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export let followingProcess = (followingInProcess, userID) => ({ type: FOLLOWING_PROCESS, followingInProcess, userID });

export default usersReducer;