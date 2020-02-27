
import React from 'react';
import classes from './navbar.module.scss';

const Navbar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    <li className={classes.item}><a href="/profile">Profile</a></li>
                    <li className={classes.item}><a href="/dialogs">Messages</a></li>
                    <li className={classes.item}><a href="/news">News</a></li>
                    <li className={classes.item}><a href="/music">Music</a></li>
                    <li className={classes.item}><a href="/setting">Setting</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Navbar;