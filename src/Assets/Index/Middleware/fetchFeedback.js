import Denny from "../Images/FeedbackClients/client-denny-hilguston.svg"
import Vani from "../Images/FeedbackClients/client-milly-singh.svg"
import Milly from "../Images/FeedbackClients/client-vani-pandey.svg"

export const fetchFeedbackItems = () => {
    const dataFeedbackItems = [
        {
                id: "4NPM48hbr54E8xtb9ZUc",
                title: {
                    gold: "starstar",
                    normal: "star"
                },
                comment: "I know in real-time where the money is spent, and I don’t have to lend out the company’s credit card anymore. What a relief!",
                client: {
                    name: "Denny Hilguston",
                    pseudonym: "@denny.hill",
                    avatar: {
                        URL: Denny
                    }
                }
        },
        {
                id: "BXt7e3M4r7Ga7aChE8u7",
                title: {
                    gold: "starstar",
                    normal: "star"
                },
                comment: "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
                client: {
                    name: "Vani Pandey",
                    pseudonym: "@vani.pandey",
                    avatar: {
                        URL: Vani
                    }
                }
        },
        {
                id: "YjZ58f8465unAh2aGhTA",
                title: {
                    gold: "starstar",
                    normal: "star"
                },
                comment: "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
                client: {
                    name: "Milly Singh",
                    pseudonym: "@milly.singh",
                    avatar: {
                        URL: Milly
                    }
                }
        }
    ]

    return dataFeedbackItems;
}
