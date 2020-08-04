import React from 'react';
import cls from './users.module.css';
import { NavLink } from 'react-router-dom';

const Users = (props) => {

    return (
        <div>
            <div className={cls.users}>
                {
                    props.users.map(user => (

                        <div className={cls.user} key={user.id}>
                            <div>
                                <NavLink to={`profile/${user.id}`}>
                                    <img className={cls.userPhoto} src={user.photos.large ? user.photos.large : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" />
                                </NavLink>
                                <button
                                    className={cls.userFollow}
                                    onClick={() => props.followToggle(user.followed, user.id)}
                                    disabled={props.followingInProcess.some(item => item === user.id)}
                                    >
                                    {user.followed ? 'unfollow' : 'follow'}
                                </button>
                            </div>
                            <div>
                                <h3 className={cls.userName}>{user.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Users;