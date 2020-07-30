import * as axios from "axios";

const samuraiAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCretentials: true,
    headers: {
        "API-KEY": "a7438d49-4a44-4a7d-8f33-9d644abd353c"
    }
});

export const usersAPI = {
    getUsers(pageSize) {
        return samuraiAPI.get(`users/?count=${pageSize}`).then(response => response.data);
    },
    changePage(page, pageSize) {
        return samuraiAPI.get(`users/?page=${page}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId) {
        return samuraiAPI.post(`follow/${userId}`).then(response => response.data);
    },
    unfollow(userId) {
        return samuraiAPI.delete(`follow/${userId}`).then(response => response.data);
    }
}

export const authAPI = {
    singInUser() {
        return samuraiAPI.get(`auth/me`).then(response => response.data);
    }
}

export const profileAPI = {
    setUserProfile(userID) {
        return samuraiAPI.get(`/profile/${userID}`).then(response => response.data);
    }
}