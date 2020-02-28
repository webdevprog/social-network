
import React from 'react';
import cls from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                {
                    props.diaologs.map(dialog => (
                        <DialogItem name={dialog.name} id={dialog.id} />
                    ))
                }
            </div>
            <div className={cls.messages}>
                {
                    props.messages.map(message => (
                        <Message message={message.message} id={message.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default Dialogs;