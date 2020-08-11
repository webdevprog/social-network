
import React from 'react';
import cls from './header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={cls.header}>
            <div className={cls.logo}>
                <img src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_960_720.png" alt="" className={cls.logoImg} />
                <h1>social-network</h1>
            </div>
            <div className="login">
                {!props.isAuth ?
                    <NavLink to="/login">login</NavLink>
                    :
                    <div>
                        <div>{props.login}</div>
                        <a href="#" onClick={props.logoutUser}>logout</a>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;