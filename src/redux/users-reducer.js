import { usersAPI } from "../api/api";

const FOLLOW_TOGGLE = 'users/FOLLOW_TOGGLE';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const GET_TOTAL_USERS = 'users/GET_TOTAL_USERS';
const TOGGLE_FETCHING = 'users/TOGGLE_FETCHING ';
const FOLLOWING_PROCESS = 'users/FOLLOWING_PROCESS '

let initialState = {
    users: [],
    totalUsers: 0,
    pageCurrent: 1,
    pageSize: 10,
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
                        return { ...user, followed: !user.followed }
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

export const followToggle = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const getTotalUsers = (total) => ({ type: GET_TOTAL_USERS, total });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export const followingProcess = (followingInProcess, userID) => ({ type: FOLLOWING_PROCESS, followingInProcess, userID });

export const getUsersThunkCreater = (page, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(false));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(toggleFetching(true));
    dispatch(setUsers(data.items));
    dispatch(getTotalUsers(data.totalCount));

    dispatch(setCurrentPage(page));
}

export const followToggleThunkCreater = (followed, userId) => async (dispatch) => {
    dispatch(followingProcess(false, userId));
    let data = await !followed ? usersAPI.follow(userId) : usersAPI.unfollow(userId);

    if (data.resultCode === 0) {
        dispatch(followToggle(userId));
        dispatch(followingProcess(true, userId));
    }
}


export default usersReducer;