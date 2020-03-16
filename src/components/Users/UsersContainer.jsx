import React from 'react';
import Users from "./Users"
import { connect } from "react-redux"
import * as axios from "axios"
import { setCurrentPage, followToggle, setUsers, getTotalUsers, toggleFetching } from "../../redux/users-reducer"
import loader from '../../assets/images/loader.svg'



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(true);
                this.props.setUsers(response.data.items);
                this.props.getTotalUsers(response.data.totalCount);
                
            });
    }

    onChangePage = (page) => {
        this.props.toggleFetching(false);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(true);
                this.props.setUsers(response.data.items);
            });

        this.props.setCurrentPage(page);
    }

    render() {
        return (
            <>
            {this.props.isFetching ? <img src={loader} alt=""/> : 
            <Users 
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsers={this.props.totalUsers}
                pageCurrent={this.props.pageCurrent}
                followToggle={this.props.followToggle}
                onChangePage={this.onChangePage}
            />
            }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        pageCurrent: state.usersPage.pageCurrent,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, { followToggle, setUsers, setCurrentPage, getTotalUsers, toggleFetching })(UsersContainer);