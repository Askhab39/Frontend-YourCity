import s from "../components/Header.module.scss"
import logo from "../files/logo_hackaton.png"
import icon from "../files/86097539e47475653e0e548723d4931c.png"
import { Link } from "react-router-dom"
import React from "react";

function Header() {
    return (
        <div className={s.Header}>
            <img className={s.logo} src={logo} alt="logo" />

            <div className={s.links}>
                <Link to="/" relative="path">
                    <button className={s.btnLink}>Главная</button>
                </Link>

                <Link to="/news">
                    <button className={s.btnLink}>Новости</button>
                </Link>

                <Link to="/events">
                    <button className={s.btnLink}>События</button>
                </Link>

                <Link to="/contacts">
                    <button className={s.btnLink}>Контакты</button>
                </Link>
            </div>

            <Link className={s.LinkEntry} to='/Entry'>
                <button className={s.textLink}>Войти</button>
                <img className={s.icon} src={icon} alt="icon" />
            </Link>
        </div>
    );
}

export default Header;