
import React from 'react';
import cls from './friend.module.scss';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return (
       <div className={cls.friend}>
         <img className={cls.photo} src={props.img} alt=""/>
         <div className={cls.name}>{props.name}</div>
       </div>
    );
}

export default Friend;