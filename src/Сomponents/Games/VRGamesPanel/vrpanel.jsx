import React from "react";

import "../../../Assets/Games/Styles/VRGamesPanel/vrpanel.css";

import { SignIn } from "../../SignIn/SignIn";

import { Modal } from "../../Modal/Modal.jsx";
import { AddNewCard } from "../../AddNewCard/AddNewCard.jsx";

export const VRGamesPanel = ({ gamesAvaiable, sortItems, addGameCard, userState, authUser, modalState, setModalState }) => {

    return (
        <section className="vr-games">
            <div className="vr-games-block">
                <div className="vr-games-block__title">VR Games</div>
                <div className="vr-games-panel">
                    <button className="vr-games-panel__button add-new-card" onClick={() => setModalState(!modalState)}>Add new card</button>
                    {
                        gamesAvaiable
                            ?
                            <select name="VRGamesSortByTime" className="vr-games-panel__select time-select" onChange={sortItems}>
                                <option value="time-new">New first</option>
                                <option value="time-last">New last</option>
                            </select>
                            :
                            null
                    }
                </div>
            </div>
            {
                !userState
                    ?
                    <Modal state={modalState} closeModal={() => setModalState(false)}>
                        <SignIn authUser={authUser} />
                    </Modal>
                    :
                    <Modal state={modalState} closeModal={() => setModalState(false)}>
                        <AddNewCard addGameCard={addGameCard} />
                    </Modal>
            }
        </section>
    )
}