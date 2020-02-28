
import React from 'react';
import cls from './../dialogs.module.scss';

const Message = (props) => {
    return (
        <div className={cls.message}>
            {props.message}
        </div>
    )
}

export default Message;