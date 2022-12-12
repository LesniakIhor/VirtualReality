import React from "react";

import * as CulturesImages from "./index"

import "../../../Assets/Index/Styles/CultureCompany/company.css"

export const CompanyCulture = () => {
    return (
        <section className="company-culture">

        <div className="ellipse-effect-values-culture"></div>

        <div className="company-block-content">
            <h3 className="company-block-content__title">Our company values
                culture
                <img src={CulturesImages.Heart} alt="Heart's"
                    className="company-block-content__heart-picture"/>
            </h3>
            <p className="company-block-content__description">We specialize in creating visual
                identities for
                products and
                branda
                in
                your company.</p>
        </div>

        <div className="advantage-block">
            <ul className="advantage-block-content first-block">
                <li className="advantages-item-sinrece">
                    <img src={CulturesImages.Sincere} alt="Sincere" className="advantages-item-sinrece__picture" />
                    <p className="advantages-item-sinrece__text">Be Sincere</p>
                </li>
                <li className="advantages-item-stronger">
                    <img src={CulturesImages.Stronger} alt="Stronger" className="advantages-item-stronger__picture" />
                    <p className="advantages-item-stronger__text">Stronger together</p>
                </li>
            </ul>
            <ul className="advantage-block-content second-block">
                <li className="advantages-item-intelligent-risk">
                    <img src={CulturesImages.IntelligentRisk} alt="Intelligent risk" className="advantages-item-intelligent-risk__picture" />
                    <p className="advantages-item-intelligent-risk__text">Take intelligent risks</p>
                </li>
                <li className="advantages-item-simple">
                    <img src={CulturesImages.Simple} alt="Simple" className="advantages-item-simple__picture" />
                    <p className="advantages-item-simple__text">Keep it simple</p>
                </li>
            </ul>
        </div>
    </section>
    )
}