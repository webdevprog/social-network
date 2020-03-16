import React from 'react';
import * as axios from 'axios';
import cls from './users.module.css';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.getTotalUsers(response.data.totalCount);
            });
    }

    onChangePage = (page) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });

        this.props.setCurrentPage(page);
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsers / this.props.pageSize);
        let pages = [];

        for (let page = 1; page <= pageCount; page++) {
            pages.push(page);
        }

        return (
            <div>
                <div className={cls.users}>
                    {
                        this.props.users.map(user => (
                            <div className={cls.user} key={user.id}>
                                <div>
                                    <img className={cls.userPhoto} src={user.photos.large ? user.photos.large : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="" />
                                    <button className={cls.userFollow} onClick={() => { this.props.followToggle(user.id) }}>{user.followed ? 'unfollow' : 'follow'}</button>
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
                                <span key={page} onClick={() => { this.onChangePage(page) }} className={this.props.pageCurrent === page ? cls.selectedPage : ''}>
                                    {page}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Users;