
import Dialogs from './Dialogs'
import {sendMessage} from '../../redux/dialogs-reducer'
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

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect,
)(Dialogs);