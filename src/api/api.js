import * as axios from "axios";

const samuraiAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "e2714baf-44ef-4f66-8332-c9d8cb5d46cc"
    }
});

export const usersAPI = {
    getUsers(page, pageSize) {
        return samuraiAPI.get(`users/?page=${page}&count=${pageSize}`).
            then(response => {
                return response.data
            });
    },
    follow(userId) {
        return samuraiAPI.post(`follow/${userId}`, {}).then(response => response.data);
    },
    unfollow(userId) {
        return samuraiAPI.delete(`follow/${userId}`).then(response => response.data);
    }
}

export const authAPI = {
    singInUser() {
        return samuraiAPI.get(`auth/me`);
    },

    login(dataLogin) {
        return samuraiAPI.post(`/auth/login`, dataLogin);
    },

    logout() {
        return samuraiAPI.delete(`/auth/login`);
    }
}

export const profileAPI = {
    setUserProfile(userID) {
        return samuraiAPI.get(`/profile/${userID}`);
    },

    getStatusProfile(userID) {
        return samuraiAPI.get(`profile/status/${userID}`);
    },

    updateStatusProfile(status) {
        return samuraiAPI.put(`profile/status/`, { status });
    },

    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file);

        return samuraiAPI.put(`profile/photo/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
        });
    }
}