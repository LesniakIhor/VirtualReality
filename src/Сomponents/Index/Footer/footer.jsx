import React from "react";

import "../../../Assets/Index/Styles/Footer/footer.css"

export const Footer = () => {
    function onSubmit(e) {
        e.preventDefault();

        const getFormEmail = document.querySelector(".footer-form-block-inputs__email");
        console.log(`email: ${getFormEmail.value}`)

        getFormEmail.value = null;
    }

    return (
        <footer className="footer-explore">
            <form className="form-promotions" onSubmit={onSubmit}>
                <div className="footer-form-block-content">
                    <h3 className="footer-form-block-content__title">
                        Explore product in
                        new way
                    </h3>
                    <p className="footer-form-block-content__description">
                        We specialize in creating visual identities for products and branda in
                        your company.
                    </p>
                    <div className="footer-form-block-inputs">
                        <input type="email" name="email" className="footer-form-block-inputs__email"
                            placeholder="Your email" required />
                        <input type="submit" value="Start 🡥" className="footer-form-block-inputs__submit-email" />
                    </div>
                </div>
            </form>
        </footer>
    )
}