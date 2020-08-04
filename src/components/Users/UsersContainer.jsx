import React from 'react';
import Users from "./Users"
import Pagination from "../common/Pagination/Pagination"
import { connect } from "react-redux"
import { getUsersThunkCreater, followToggleThunkCreater} from "../../redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageCurrent, this.props.pageSize);
    }

    onChangePage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        pageCurrent: state.usersPage.pageCurrent,
        isFetching: state.usersPage.isFetching,
        followingInProcess: state.usersPage.followingInProcess
    }
}

export default connect(mapStateToProps, { 
    followToggle: followToggleThunkCreater,
    getUsers: getUsersThunkCreater
 })(UsersContainer);