
import React from 'react';
import cls from './dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessageActionCreate, updateTextMessageActionCreate} from '../../redux/state'

const Dialogs = (props) => {

    let addMessage = (e) => {
        e.preventDefault()
        props.dispatch(addMessageActionCreate())
    }

    let handleChange = (e) => {
        props.dispatch(updateTextMessageActionCreate(e.target.value))
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
                <form action="" onSubmit={addMessage}>
                    <textarea name="" id="" value={props.textMessage} onChange={handleChange} cols="30" rows="10"></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    );
}

export default Dialogs;