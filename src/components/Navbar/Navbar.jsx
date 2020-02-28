
import React from 'react';
import cls from './navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <aside className={cls.sidebar}>
            <nav className={cls.nav}>
                <ul className={cls.navList}>
                    <li className={cls.item}>
                        <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
                    </li>
                    <li className={cls.item}>
                        <NavLink exact to="/dialogs" activeClassName={cls.active}>Messages</NavLink>
                    </li>
                    <li className={cls.item}>
                        <NavLink to="/news" activeClassName={cls.active}>News</NavLink>
                    </li>
                    <li className={cls.item}>
                        <NavLink to="/music" activeClassName={cls.active}>Music</NavLink>
                    </li>
                    <li className={cls.item}>
                        <NavLink to="/setting" activeClassName={cls.active}>Setting</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Navbar;