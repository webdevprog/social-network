
import Dialogs from './Dialogs'
import {sendMessageActionCreate, updateTextMessageActionCreate} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';

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

let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer =  connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;