import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.tabs}>
                <NavLink className={s.menuItem} activeClassName={s.activeMenuItem} to="/films">
                    <p>Films</p>
                </NavLink>
                <NavLink className={s.menuItem} activeClassName={s.activeMenuItem} to="/persons">
                    <p>Persons</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Header