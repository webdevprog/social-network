
import React from 'react';
import cls from './dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    let onSendMessage = (e) => {
        e.preventDefault();
        props.sendMessage();
    }

    let onUpdateTextMessage = (e) => {
        let body = e.target.value;
        props.updateTextMessage(body);
    }
    if (!props.isAuth) { return <Redirect to='/login' /> }
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                {
                    props.dialogs.map(dialog => (
                        <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
                    ))
                }
            </div>
            <div className={cls.messages}>
                {
                    props.messages.map(message => (
                        <Message message={message.message} id={message.id} />
                    ))
                }
                <form action="" onSubmit={onSendMessage}>
                    <textarea placeholder="Enter message" value={props.textMessage} onChange={onUpdateTextMessage} cols="30" rows="10"></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;