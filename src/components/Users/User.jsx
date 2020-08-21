import React from 'react';
import cls from './users.module.css';
import { NavLink } from 'react-router-dom';

const User = ({ user, followToggle, followingInProcess }) => {

    return (

        <div className={cls.user}>
            <div>
                <NavLink to={`profile/${user.id}`}>
                    <img className={cls.userPhoto} src={user.photos.large ? user.photos.large : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" />
                </NavLink>
                <button
                    className={cls.userFollow}
                    onClick={() => followToggle(user.followed, user.id)}
                    disabled={followingInProcess.some(item => item === user.id)}
                >
                    {user.followed ? 'unfollow' : 'follow'}
                </button>
            </div>
            <div>
                <h3 className={cls.userName}>{user.name}</h3>
                <div>{user.status}</div>
            </div>
        </div>

    )
}

export default User;