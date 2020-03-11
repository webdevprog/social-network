import Users from "./Users"
import { connect } from "react-redux"
import { showMoreActionCreate, followToggleActionCreate, setUsersActionCreate } from "../../redux/users-reducer"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        showBtnMore: state.usersPage.users.length > state.usersPage.prevUsers ? true : false
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        showMore: (usersLength) => {
            dispatch(showMoreActionCreate(usersLength))
        },
        followToggle: (userId) => {
            dispatch(followToggleActionCreate(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreate(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;