import React from "react";

import * as MainElements from "./index.js";

export const MainContent = () => {
    return (
        <main className="main-content">
        <MainElements.Hero />
        <MainElements.ExploreVRGames />
        <MainElements.VRWorld />
        <MainElements.FeedbackClients />
        <MainElements.CompanyCulture />
        </main>
    )
}