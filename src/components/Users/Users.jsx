import React from 'react';
import cls from './users.module.css';
import User from './User';

const Users = (props) => {

    return (
        <div>
            <div className={cls.users}>
                {
                    props.users.map(user => (
                        <User
                            user={user}
                            followingInProcess={props.followingInProcess} f
                            followToggle={props.followToggle}
                            key={user.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Users;