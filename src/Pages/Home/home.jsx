import React, { useState } from 'react'

import { checkAuth } from "../../Assets/Services/Utils/checkAuth.js";
import * as Components from "../../Сomponents/Index/all.js";

export const HomePage = () => {
    const [userState, setUserState] = useState(Boolean(checkAuth()));

    return (
        <>
            <Components.Header userState={userState} setUserState={setUserState} />
            <Components.MainContent />
            <Components.Footer />
        </>
    )
}
