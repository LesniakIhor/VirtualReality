import React from 'react'

import "../../Assets/Styles/SignIn/signin.css";

export const SignIn = ({ authUser }) => {

    return (
        <form className="sign-in__form" onSubmit={authUser}>
            <p className="form__title">Sign in</p>
            <br />
            <input type="text" name="usernameOrEmail" placeholder="Email or password" className="form__username-of-email"
                required />
            <br />
            <input type="password" name="password" placeholder="Password" className="form__password" required />
            <br />
            <input type="submit" value="Sign In" className="form__sign-in-button" />
        </form>
    )
}
