import React from 'react';
import Users from "./Users"
import Pagination from "../common/Pagination/Pagination"
import { connect } from "react-redux"
import { setCurrentPage, followToggle, setUsers, getTotalUsers, toggleFetching, followingProcess } from "../../redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(false);
        usersAPI.getUsers(this.props.pageSize).then(data => {
            this.props.toggleFetching(true);
            this.props.setUsers(data.items);
            this.props.getTotalUsers(data.totalCount);
        });
    }

    onChangePage = (page) => {
        this.props.toggleFetching(false);
        usersAPI.changePage(page, this.props.pageSize).then(data => {
            this.props.toggleFetching(true);
            this.props.setUsers(data.items);
        });

        this.props.setCurrentPage(page);
    }

    render() {
        return (
            <>
                {this.props.isFetching ?

                    <Preloader /> :

                    <Users
                        users={this.props.users}
                        followToggle={this.props.followToggle}
                        followingProcess={this.props.followingProcess}
                        followingInProcess={this.props.followingInProcess}
                    />
                }

                <Pagination
                    onChangePage={this.onChangePage}
                    pageCurrent={this.props.pageCurrent}
                    pageSize={this.props.pageSize}
                    totalPages={this.props.totalUsers}
                />
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
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
}

export default connect(mapStateToProps, { followToggle, setUsers, setCurrentPage, getTotalUsers, toggleFetching, followingProcess })(UsersContainer);