
import React from 'react';
import cls from './dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageActionCreate, updateTextMessageActionCreate} from '../../redux/dialogs-reducer'

const Dialogs = (props) => {

    let sendMessage = (e) => {
        e.preventDefault()
        props.dispatch(sendMessageActionCreate())
    }

    let handleChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateTextMessageActionCreate(body))
    }

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                {
                    props.state.diaologs.map(dialog => (
                        <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
                    ))
                }
            </div>
            <div className={cls.messages}>
                {
                    props.state.messages.map(message => (
                        <Message message={message.message} id={message.id} />
                    ))
                }
                <form action="" onSubmit={sendMessage}>
                    <textarea placeholder="Enter message" value={props.textMessage} onChange={handleChange} cols="30" rows="10"></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;