import React from "react";

import * as VRGamesPhoto from "./index";

import "../../../Assets/Index/Styles/ExploreVRGames/vrgames.css"

export const ExploreVRGames = () => {
    function onClick(e) {
        console.log(`clicked: `, e.target)
    }

    return (
        <section className="exp-play-block">
            <div className="ellipse-effect-girl-with-glasses"></div>
            <img src={VRGamesPhoto.GirlVR} className="girl-with-glasses__photo" alt="girl with glasses" />
            <img src={VRGamesPhoto.ManVR} className="man-in-vr__photo" alt="man in vr" />
            <div className="new-experience-block-content">
                <h2 className="new-experience-block-content__title">New Experience In
                    Playing Game</h2>
                <span className="new-experience-block-content__description">You can try playing the
                    game
                    with a
                    new style and of course a more real
                    feel, like you are the main character
                    in your game and adventure in this
                    new digital world.</span>
                <button className="new-experience-block-content__button vr-games" onClick={onClick}>Get it Now</button>
            </div>
        </section>
    )
}