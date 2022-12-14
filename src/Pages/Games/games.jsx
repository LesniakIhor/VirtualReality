import React, { useState } from "react";

import { checkAuth } from "../../Assets/Services/Utils/checkAuth.js";
import { Header } from "../../–°omponents/Header/header";
import { MainContent } from "../../–°omponents/Games/MainContent/MainContent";

export const GamesPage = () => {
    const [userState, setUserState] = useState(Boolean(checkAuth()));

    return (
        <>
            <Header userState={userState} setUserState={setUserState} />
            <MainContent userState={userState} setUserState={setUserState} />
        </ >

    )
}