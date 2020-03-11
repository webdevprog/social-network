import React from 'react';
import * as axios from 'axios';
import cls from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    let onShowMore = () => {
        props.showMore(props.users.length);
    }

    return (
        <div>
            <div className={cls.users}>
                {
                    props.users.map(user => (
                        <div className={cls.user} key={user.id}>
                            <div>
                                <img className={cls.userPhoto} src={user.photos.large ? user.photos.large : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" />
                                <button className={cls.userFollow} onClick={() => { props.followToggle(user.id) }}>{user.followed ? 'unfollow' : 'follow'}</button>
                            </div>
                            <div>
                                <h3 className={cls.userName}>{user.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                props.showBtnMore ? <button className={cls.showMore} onClick={onShowMore}>Show more</button> : ''
            }
        </div>
    );
}

export default Users;