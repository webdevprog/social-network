
import React from 'react';
import cls from './navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';

const Navbar = (props) => {
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
                    <li className={cls.item}>
                        <NavLink to="/users" activeClassName={cls.active}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="">
                <h3>Friends</h3>
                <div className={cls.friends}>
                    {
                        props.friends.map((friend) => (
                            <Friend name={friend.name} img={friend.img} />
                        ))
                    }
                </div>
            </div>


        </aside>
    );
}

export default Navbar;