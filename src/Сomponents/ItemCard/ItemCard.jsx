import React from 'react';

import { fetchGames } from '../../Assets/Games/Middleware/fetchGames';
import { splitByChar } from '../../Assets/Services/Utils/splitByChar';

import "../../Assets/Styles/ItemCards/itemcards.css";

export const ItemCard = ({ gameId }) => {
    const getAllGames = fetchGames();

    const findGameCard = getAllGames.find(game => game.id === gameId);

    if (!findGameCard) { console.error(`Item with id: "${gameId}" not found!!`); return null; }

    return (
        <div className="item-page">
            <img className="item-page__photo" src={!findGameCard.game.image.URL ? 'https://i.imgur.com/gMUYei1.png' : findGameCard.game.image.URL} alt={!findGameCard.game.name ? "N/A" : findGameCard.game.name} />
            <h1 className="item-page__game-name">{!findGameCard.game.name ? "N/A" : findGameCard.game.name}</h1>
            <p className="item-page__game-description">{!findGameCard.game.description ? "N/A" : (!splitByChar(findGameCard.game.description, "§")[1] ? findGameCard.game.description : splitByChar(findGameCard.game.description, "§")[1])}</p>
            <div className="item-page__user-name-block">
                <img className="item-page__user-avatar" src={!findGameCard.user.avatar.URL ? 'https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png' : findGameCard.user.avatar.URL} alt={!findGameCard.user.name ? "N/A" : findGameCard.user.name} />
                <span className="item-page__user-name">{!findGameCard.user.name ? "N/A" : findGameCard.user.name}</span>
            </div>
            <h2 className="item-page__user-review">{!findGameCard.user.review ? "N/A" : (!splitByChar(findGameCard.user.review, "§")[1] ? findGameCard.user.review : splitByChar(findGameCard.user.review, "§")[1])}</h2>
        </div>
    )
}
