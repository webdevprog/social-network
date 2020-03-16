import React from 'react';
import cls from './users.module.css';

const Users = (props) => {
    debugger
    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];

    for (let page = 1; page <= pageCount; page++) {
        pages.push(page);
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
            <div className={cls.pagination}>
                {
                    pages.map(page => {
                        return (
                            <span key={page} onClick={() => { props.onChangePage(page) }} className={props.pageCurrent === page ? cls.selectedPage : ''}>
                                {page}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users;