import React from "react";

import * as VRWorldImages from "./index.js"

import "../../../Assets/Index/Styles/VRWorld/vrworld.css"

export const VRWorld = () => {
    return (
        <section className="awesome-exp-vr-world">
            <div className="exp-vr-block">
                <div className="exp-vr-block__content">
                    <h3 className="exp-vr-block__title">Awesome experiences with
                        virtual reality world
                    </h3>
                    <img src={VRWorldImages.VideoInLine} className="exp-vr-block__vr-video" alt="video" />
                </div>
            </div>
        </section>
    )
}