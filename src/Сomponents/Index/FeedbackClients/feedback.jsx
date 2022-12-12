import React, { useState, useCallback, useEffect } from "react";

import * as FeedbackClientsImages from "./index";

import { fetchFeedbackItems } from "../../../Assets/Index/Middleware/fetchFeedback";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";

import "../../../Assets/Index/Styles/FeedbackClients/feedback.css";

const feedbackItems = fetchFeedbackItems();

export const FeedbackClients = () => {

    const [maxCards, setMaxCards] = useState(window.innerWidth <= 576 ? 1 : 3);
    const [switchCards, setSwitchCards] = useState(window.innerWidth <= 576);

    const [feedbackCardNumber, setFeedbackCardNumber] = useState(1);

    const parseFeedbacks = useCallback(() => {
        if (!feedbackItems || feedbackItems.length === 0) return null;

        if (!switchCards) return feedbackItems.slice(0, maxCards);

        return feedbackItems.slice(feedbackCardNumber, feedbackCardNumber + 1);
    }, [feedbackCardNumber, switchCards, maxCards])

    const switchCardForward = useCallback(() => {
        if (feedbackCardNumber === feedbackItems.length - 1) return;

        setFeedbackCardNumber(feedbackCardNumber + 1);
    }, [feedbackCardNumber]);

    const switchCardBackward = useCallback(() => {
        if (feedbackCardNumber === 0) return;

        setFeedbackCardNumber(feedbackCardNumber - 1);
    }, [feedbackCardNumber]);

    const resizeHandler = useCallback(() => {
        if (window.innerWidth <= 576 && !switchCards) { setSwitchCards(true); setMaxCards(1); return; }
        if (window.innerWidth > 576 && switchCards) { setSwitchCards(false); setMaxCards(3); return; }
    }, [switchCards])

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [resizeHandler])

    return (
        <section className="feedback-clients">
            <div className="ellipse-effect-feedback"></div>

            <div className="feedback-block-content">
                <h3 className="feedback-block-content__title">What our clients say</h3>
                <span className="feedback-block-content__description">See what our customer say
                    about us. It really
                    matter
                    for
                    us.
                    How
                    good or bad
                    we will make ir for evaluation to make EhyalLive better.</span>
            </div>
            <div className="feedback-items-block">
                {
                    switchCards
                        ?
                        <div className="feedback-item__backward" onClick={switchCardBackward}>
                            <img src={FeedbackClientsImages.ArrowRight} alt="arrow right"
                                className="feedback-item__arrow-right" />
                        </div>
                        :
                        null
                }
                <ul className="feedback-items">
                    <FeedbackCard feedbackCards={parseFeedbacks()} />
                </ul>
                {
                    switchCards
                        ?
                        <div className="feedback-item__forward" onClick={switchCardForward}>
                            <img src={FeedbackClientsImages.ArrowLeft} alt="arrow left"
                                className="feedback-item__arrow-left" />
                        </div>
                        :
                        null
                }
            </div>
        </section>
    )
}