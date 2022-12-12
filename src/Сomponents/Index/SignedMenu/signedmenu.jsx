import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';

import ArrowUpImage from "../../../Assets/Index/Images/Header/arrow-up.svg";

export const PCMenu = ({ state, logOutUser, closeMenu }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (!menuRef.current) return;

            if (!e.target.closest("li")) {
                closeMenu();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [menuRef, state, closeMenu]);

    if (!state) return null;

    return (
        <div className="signed-in-menu" ref={menuRef} onClick={(e) => e.stopPropagation()}>
            <div className="menu-buttons-block">
                <p className="menu-buttons-block__title">User menu</p>
                <ul className="signed-buttons-list">
                    <li className="signed-buttons-list__name button-recently-added"><NavLink to="/games"
                        className="signed-buttons-list__link">Recently
                        Added</NavLink></li>
                    <li className="signed-buttons-list__name button-sign-out" onClick={logOutUser}><NavLink to="#!"
                        className="signed-buttons-list__link">Sign
                        out</NavLink></li>
                </ul>
            </div>
            <img src={ArrowUpImage} alt="arrow up" className="signed-in-menu__arrow-up" />
        </div>
    )
}

export const MobileMenu = ({ state, signed, authUser, modalState, setModalState, logOutUser, closeMenu }) => {
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (!menuRef.current) return;
            if (e.target.classList.contains("hamburger-menu-icon")) return;

            if (!e.target.closest(".hamburger-menu-list")) {
                closeMenu();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [menuRef, state, closeMenu]);

    if (!state) return null;

    if (!signed) {
        return (
            <div className="hamburger-menu-block" ref={menuRef}>
                <ul className="hamburger-menu-list">
                    <li className="hamburger-nav-button hamburger-button-home">
                        <NavLink className="hamburger-nav-button__link" href="/">Home</NavLink>
                    </li>
                    <li className="hamburger-nav-button hamburger-button-vr-games">
                        <NavLink className="hamburger-nav-button__link" href="/games">Games</NavLink>
                    </li>
                    <li className="hamburger-nav-button hamburger-button-features">
                        <NavLink className="hamburger-nav-button__link" href="#!">Features</NavLink>
                    </li>
                    <li className="hamburger-nav-button hamburger-button-sign-in" onClick={() => setModalState(!modalState)}>
                        <button className="hamburger-nav-button__button">Sign In</button>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <div className="hamburger-menu-block">
            <div className="hamburger-signed-in">
                <span className="hamburger-signed-in__username">{authUser.username}</span>
                <img src={authUser.avatar.URL} alt={authUser.user.name}
                    className="hamburger-signed-in__photo" />
            </div>
            <ul className="hamburger-menu-list">
                <li className="hamburger-nav-button hamburger-button-home">
                    <NavLink className="hamburger-nav-button__link" href="/">Home</NavLink>
                </li>
                <li className="hamburger-nav-button hamburger-button-vr-games">
                    <NavLink className="hamburger-nav-button__link" href="/games">Games</NavLink>
                </li>
                <li className="hamburger-nav-button hamburger-button-features">
                    <NavLink className="hamburger-nav-button__link" href="#!">Features</NavLink>
                </li>
                <li className="hamburger-nav-button hamburger-button-sign-out" >
                    <button className="hamburger-nav-button__button" onClick={logOutUser}>Sign out</button>
                </li>
            </ul>
        </div>
    )
}