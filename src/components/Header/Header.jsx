
import React from 'react';
import cls from './header.module.scss';

const Header = (props) => {
    return (
        <header className={cls.header}>
            <div className={cls.logo}>
                <img src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_960_720.png" alt="" className={cls.logoImg} />
                <h1>Logo text</h1>
            </div>
            <div className="login">
                {!props.isFetch ? <a href="">login</a> : props.login}
            </div>
        </header>
    );
}

export default Header;