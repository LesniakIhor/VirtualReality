import React, { useCallback, useState } from 'react'

import { Modal } from '../../Modal/Modal';
import { ItemCard } from '../../ItemCard/ItemCard';

import "../../../Assets/Games/Styles/ItemGames/itemgames.css";

export const ItemGames = ({ itemGames }) => {
    const [gameCardId, setGameCardId] = useState(null);
    const [modalState, setModalState] = useState(false);

    const openItemGame = useCallback((gameId) => {
        setGameCardId(gameId);
        setModalState(true);
    }, [setGameCardId, setModalState]);

    if (!itemGames || itemGames.length === 0) {
        return (
            <div className="vr-empty-games">
                <h2 className="vr-empty-games__title">Empty Games</h2>
            </div>
        )
    };

    return (
        <>
            <ul className="vr-games-items-list">
                {
                    itemGames.map(game =>
                        <li className="vr-games-item" key={game.id} onClick={() => openItemGame(game.id)}>
                            <div className="vr-games__info-block">
                                <div className="vr-games-item__game-block">
                                    <h4 className="vr-games-item__game-name">{!game.game.name ? "N/A" : (game.game.name.length > 21 ? `${game.game.name.slice(0, 19)}…` : game.game.name)}</h4>
                                    <span className="vr-games-item__game-description">{!game.game.description ? "N/A" : (game.game.description.split('§')[0].length > 35 ? `${game.game.description.split('§')[0].slice(0, 33)}…` : game.game.description.split('§')[0])}</span>
                                </div>
                                <div className="vr-games-item__user-block">
                                    <h4 className="vr-games-item__user-name">{!game.user.name ? "N/A" : (game.user.name.length > 19 ? `${game.user.name.slice(0, 17)}…` : game.user.name)}</h4>
                                    <span className="vr-games-item__user-review">{!game.user.review ? "N/A" : (game.user.review.split('§')[0].length > 50 ? `${game.user.review.split('§')[0].slice(0, 48)}…` : game.user.review.split('§')[0])}</span>
                                </div>
                            </div>
                            <img src={!game.game.image.URL ? 'https://i.imgur.com/gMUYei1.png' : game.game.image.URL} alt={!game.game.name ? "N/A" : game.game.name} className="vr-games-item__photo" />
                        </li>)
                }
            </ul>
            <Modal state={modalState} styles={{ width: "450px", height: "450px", overflowY: "auto" }} closeModal={() => setModalState(false)}>
                <ItemCard gameId={gameCardId} />
            </Modal>
        </>
    )
}
