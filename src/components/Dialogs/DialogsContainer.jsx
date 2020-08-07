
import Dialogs from './Dialogs'
import {sendMessageActionCreate, updateTextMessageActionCreate} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textMessage: state.dialogsPage.textMessage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreate())
        },
        updateTextMessage: (body) => {
            dispatch(updateTextMessageActionCreate(body))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);