import React from 'react';
import Users from "./Users"
import { connect } from "react-redux"
import * as axios from "axios"
import { setCurrentPageAC, followToggleActionCreate, setUsersActionCreate, getTotalUsersActionCreate } from "../../redux/users-reducer"



class UsersContainer extends React.Component {

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
        return (
            <Users 
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsers={this.props.totalUsers}
                pageCurrent={this.props.pageCurrent}
                followToggle={this.props.followToggle}
                onChangePage={this.onChangePage}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        pageCurrent: state.usersPage.pageCurrent
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followToggle: (userId) => {
            dispatch(followToggleActionCreate(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreate(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        getTotalUsers: (total) => {
            dispatch(getTotalUsersActionCreate(total))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);