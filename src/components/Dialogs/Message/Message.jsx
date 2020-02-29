
import React from 'react';
import cls from './../dialogs.module.scss';

const Message = (props) => {
    return (
        <div className={cls.message}>
            <img src="https://cdn.pixabay.com/photo/2016/06/14/00/14/cat-1455468_960_720.jpg" alt="" />
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default Message;