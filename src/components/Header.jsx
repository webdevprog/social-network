
import React from 'react';
import classes from './header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://cdn.pixabay.com/photo/2016/08/25/07/30/orange-1618917_960_720.png" alt="" className={classes.logo} />
            <h1>Logo text</h1>
        </header>
    );
}

export default Header;