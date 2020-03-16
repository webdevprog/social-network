import Users from "./Users"
import { connect } from "react-redux"
import { setCurrentPageAC, followToggleActionCreate, setUsersActionCreate, getTotalUsersActionCreate } from "../../redux/users-reducer"

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;