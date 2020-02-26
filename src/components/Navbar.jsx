
import React from 'react';
import classes from './navbar.module.scss';

const Navbar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    <li className={classes.item}><a href="#test">Profile</a></li>
                    <li className={classes.item}><a href="#test">Messages</a></li>
                    <li className={classes.item}><a href="#test">News</a></li>
                    <li className={classes.item}><a href="#test">Music</a></li>
                    <li className={classes.item}><a href="#test">Setting</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Navbar;