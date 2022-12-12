import React from 'react'

import "../../Assets/Styles/AddNewCard/addnewcard.css";

export const AddNewCard = ({ addGameCard }) => {
    return (
        <form className="realities-games-block__form" onSubmit={addGameCard}>
            <p className="form__title">Add new game</p>
            <br />
            <input type="text" name="gameName" placeholder="Game name" className="form__game-name" required />
            <br />
            <input type="text" name="gameDescription" placeholder="Game description" className="form__game-description"
                required />
            <br />
            <input type="text" name="gameReview" placeholder="Game review" className="form__game-description" required />
            <br />
            <input type="text" name="gameImageURL" placeholder="Game image URL" className="form__game-image-url" />
            <br />
            <input type="submit" value="Add game" className="form__add-card" />
        </form>
    )
}
