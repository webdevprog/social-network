import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers= createSelector(getUsersSelector, 
    (users) => {
        return users.filter(item => true);
    });

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsers = (state) => {
    return state.usersPage.totalUsers;
}

export const getPageCurrent = (state) => {
    return state.usersPage.pageCurrent;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProcess= (state) => {
    return state.usersPage.followingInProcess;
}