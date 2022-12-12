import React from 'react'

export const FeedbackCard = ({ feedbackCards }) => {
    if (!feedbackCards || feedbackCards.length === 0) return null;

    return (
        feedbackCards.map(feedback =>
            <li className="feedback-item" key={feedback.id}>
                <h6 className="feedback-item__title">
                    <strong className="feedback-item__bold">
                        <span className="feedback-item__gold">{feedback.title.gold}</span>{feedback.title.normal}
                    </strong>
                </h6>
                <p className="feedback-item__comment">{feedback.comment}</p>
                <div className="feedback-item__client">
                    <img src={feedback.client.avatar.URL} alt={feedback.client.name} className="feedback-item__client-photo" />
                    <p className="feedback-item__client-name">{feedback.client.name}</p>
                    <p className="feedback-item__client-pseudonym">{feedback.client.pseudonym}</p>
                </div>
            </li>
        )
    )
}
