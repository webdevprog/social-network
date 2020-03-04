
import React from 'react';
import Dialogs from './Dialogs'
import {sendMessageActionCreate, updateTextMessageActionCreate} from '../../redux/dialogs-reducer'

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreate())
    }

    let updateTextMessage = (text) => {
        props.store.dispatch(updateTextMessageActionCreate(text))
    }

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            textMessage={state.textMessage}
            sendMessage={sendMessage}
            updateTextMessage={updateTextMessage}
         />
    );
}

export default DialogsContainer;