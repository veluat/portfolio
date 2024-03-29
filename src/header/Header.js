import React from "react";
import s from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {
    return (
        <header className={s.headerWrapper}>
            <div className={s.nav}>
                <Nav/>
                <BurgerNav/>
            </div>
            <span className={s.line}></span>
        </header>
    );
}
