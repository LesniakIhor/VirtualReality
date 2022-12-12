import React, { useState, useCallback, useEffect } from "react";

import { checkAuth } from "../../Assets/Services/Utils/checkAuth.js";
import { fetchUsers } from "../../Assets/Index/Middleware/fetchUsers.js";

import "../../Assets/Styles/Header/header.css";

import { Modal } from "../Modal/Modal.jsx";

import { SignIn } from "../SignIn/SignIn.jsx";
import { MobileMenu, PCMenu } from "../Index/SignedMenu/signedmenu.jsx";
import { NavLink } from "react-router-dom";

export const Header = ({ userState, setUserState }) => {

    const sitePathName = window.location.pathname;

    const checkAuthUser = checkAuth();

    const [mobileState, setMobileState] = useState(window.innerWidth <= 576);

    const [modalState, setModalState] = useState(false);

    const [menuState, setMenuState] = useState(false);

    const authUser = useCallback((e) => {
        e.preventDefault();

        const getAllUsers = fetchUsers();

        const findUser = getAllUsers.filter(x => x.user.login === e.target[0].value && x.user.password === e.target[1].value)[0];

        if (!findUser) return;

        localStorage.setItem("user", JSON.stringify({ user: { name: findUser.user.name, login: e.target[0].value }, avatar: { URL: findUser.user.avatar.URL } }));

        setModalState(false);
        setUserState(true);
    }, [setModalState, setUserState]);

    const logOutUser = useCallback(() => {
        localStorage.removeItem("user");

        setUserState(false);
        setMenuState(false);
    }, [setUserState, setMenuState]);

    const resizeHandler = useCallback(() => {
        if (window.innerWidth <= 576 && !mobileState) { return setMobileState(true); }
        if (window.innerWidth > 576 && mobileState) { return setMobileState(false); }
    }, [mobileState])

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [resizeHandler])

    if (!mobileState) {
        return (
            <header className="head-section">
                <div className="ellipse-effect-header"></div>
                <nav className="head-nav">
                    <div className="head-logo"> <NavLink className="head-logo__link" to="/">Light</NavLink> </div>
                    <ul className="head-nav-buttons">
                        <li className={sitePathName === "/" ? "nav-button button-home button-active" : "nav-button button-home"}>
                            <NavLink className="nav-button__link" to="/">Home</NavLink>
                        </li>
                        <li className={sitePathName === "/games" ? "nav-button button-vr-games button-active" : "nav-button button-vr-games"}>
                            <NavLink className="nav-button__link" to="/games">Games</NavLink>
                        </li>
                        <li className="nav-button button-features">
                            <NavLink className="nav-button__link" to="#!">Features</NavLink>
                        </li>
                        {userState
                            ?
                            <li className="nav-buttons button-signed-in" onClick={() => { setMenuState(!menuState) }}>
                                <img src={checkAuthUser.avatar.URL} alt={checkAuthUser.user.name}
                                    className="button-signed-in__photo" />
                                {menuState
                                    ?
                                    <PCMenu state={menuState} logOutUser={logOutUser} closeMenu={() => setMenuState(false)} />
                                    :
                                    null}
                            </li>
                            :
                            <li className="nav-button button-sign-in" onClick={() => setModalState(!modalState)}>
                                <button className="nav-button__link">Sign In</button>
                            </li>
                        }
                    </ul>
                </nav>
                {userState
                    ?
                    null
                    :
                    <Modal state={modalState} closeModal={() => setModalState(false)}>
                        <SignIn authUser={authUser} />
                    </Modal>
                }
            </header>
        )
    }

    return (
        <header className="head-section">
            <div className="ellipse-effect-header"></div>
            <nav className="head-nav">
                <div className="head-logo"> <NavLink className="head-logo__link" to="/">Light</NavLink> </div>
                <div className={!menuState ? "hamburger-menu-icon" : "hamburger-menu-icon hamburger-menu-icon__active"} onClick={() => setMenuState(!menuState)}>
                    <div className="hamburger-menu-icon__line"></div>
                    <div className="hamburger-menu-icon__line"></div>
                    <div className="hamburger-menu-icon__line"></div>
                </div>
                <MobileMenu state={menuState} signed={userState} authUser={checkAuthUser} modalState={modalState} setModalState={setModalState} logOutUser={logOutUser} closeMenu={() => setMenuState(false)} />
            </nav>
            {userState
                ?
                null
                :
                <Modal state={modalState} closeModal={() => setModalState(false)}>
                    <SignIn authUser={authUser} />
                </Modal>}
        </header>

    );
}
