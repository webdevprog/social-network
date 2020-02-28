
import React from 'react';
import cls from './dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={`${cls.dialog} ${cls.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={cls.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItem}>
                <DialogItem name="Vitaliy" id="1" />
                <DialogItem name="Sasha" id="2" />
                <DialogItem name="Viktoria" id="3" />
            </div>
            <div className={cls.messages}>
                <Message message="hi, Vasya" />
                <Message message="How are you?" />
                <Message message="What's up man." />
            </div>
        </div>
    );
}

export default Dialogs;