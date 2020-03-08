
import Dialogs from './Dialogs'
import {sendMessageActionCreate, updateTextMessageActionCreate} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textMessage: state.dialogsPage.textMessage
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

const DialogsContainer =  connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;