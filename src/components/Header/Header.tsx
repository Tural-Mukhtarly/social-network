import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

type HeaderType = {
    isAuth: boolean
    login: null
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img src={'https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg'} alt=" " />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}
export default Header;