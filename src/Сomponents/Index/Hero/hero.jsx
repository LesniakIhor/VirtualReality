import React from "react";

import * as HeroImages from "./index"

import "../../../Assets/Index/Styles/Hero/hero.css";

export const Hero = () => {
    return (
        <section className="hero-content">
                <div className="ellipse-effect-cinematic-vr"></div>
                <div className="explore-section">
                    <div className="explore-block-content">
                        <h1 className="explore-block-content__explore-vr">Let’s Explore&shy;
                            Three-Dimensional visual</h1>
                        <span className="explore-block-content__explore-vr-description">
                            With virtual technology you can see the digital world feel more real and
                            you can play the
                            game
                            with
                            a
                            new style.
                        </span>
                        <div className="explore-block-content__hero-buttons">
                            <button className="button-invite-friend">Invite Friend</button>
                            <button className="button-explore-device">Explore</button>
                        </div>
                        <ul className="explore-block-content__peoples-online">
                            <li className="peoples-online__people">
                                <img src={HeroImages.OnlinePeopleOne} alt="OnlinePeopleOne"
                                    className="peoples-online__people-photo-orange-girl" />
                            </li>
                            <li className="peoples-online__people">
                                <img src={HeroImages.OnlinePeopleTwo} alt="OnlinePeopleTwo"
                                    className="peoples-online__people-photo-white-girl" />
                            </li>
                            <li className="peoples-online__people">
                                <img src={HeroImages.OnlinePeopleThree} alt="OnlinePeopleThree"
                                    className="peoples-online__people-photo-yellow-girl" />
                            </li>
                            <li className="peoples-online__people">
                                <img src={HeroImages.OnlinePeopleFour} alt="OnlinePeopleFour"
                                    className="peoples-online__people-photo-red-man" />
                            </li>
                            <li className="peoples-online__people-online">
                                • 400k people online
                            </li>
                        </ul>
                    </div>
                    <div className="cinematic-block-content">
                        <img src={HeroImages.VRGirl} alt="Girl in VR" className="explore-vr-girl__photo" />
                        <div className="explore-vr-girl">
                            <h1 className="explore-vr-girl__vr-reality-title">Cinematic Virtual Reality
                            </h1>
                            <hr className="explore-vr-girl__vr-line" />
                            <span className="explore-vr-girl__vr-reality-description">Let’s be the best
                                for more real and
                                effective
                                results
                                and ready to explore the limitless world that we have prepared for
                                you.</span>
                        </div>
                    </div>
                </div>
            </section>
    )
}