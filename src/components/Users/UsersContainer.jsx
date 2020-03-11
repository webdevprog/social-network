import Users from "./Users"
import { connect } from "react-redux"
import { showMoreActionCreate, followToggleActionCreate } from "../../redux/users-reducer"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users.slice(0, state.usersPage.prevUsers),
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;