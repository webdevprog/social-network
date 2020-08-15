import React from 'react';
import { connect } from "react-redux";
import { followToggleThunkCreater, getUsersThunkCreater } from "../../redux/users-reducer";
import Pagination from "../common/Pagination/Pagination";
import Preloader from '../common/Preloader/Preloader';
import Users from "./Users";
import {
    getUsers, getPageSize, getPageCurrent,
    getTotalUsers, getIsFetching, getFollowingInProcess
} from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.usersRequest(this.props.pageCurrent, this.props.pageSize);
    }

    onChangePage = (page) => {
        this.props.usersRequest(page, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ?

                    <Preloader /> :

                    <Users
                        users={this.props.users}
                        followToggle={this.props.followToggle}
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        pageCurrent: getPageCurrent(state),
        isFetching: getIsFetching(state),
        followingInProcess: getFollowingInProcess(state)
    }
}

export default connect(mapStateToProps, {
    followToggle: followToggleThunkCreater,
    usersRequest: getUsersThunkCreater
})(UsersContainer);