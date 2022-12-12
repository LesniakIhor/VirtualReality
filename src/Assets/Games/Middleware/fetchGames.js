export const fetchGames = () => {
    const dataCardItems = [
        {
            id: "VZP2WvQAzlHu",
            game: {
                name: "VR set for PlayStation 5",
                description: "Get ready to VR!§It's a beatiful place, where you feel unforgettable feelings.",
                image: {
                    URL: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/26/1467018952-ps-vr-game.jpg"
                }
            },
            user: {
                avatar: {
                    URL: "https://i.pinimg.com/originals/8e/89/6f/8e896f432d27590522a9f6e4117b883b.jpg"
                },
                name: "Lewys Floyd",
                review: "I tried this set and I liked it!§This is a great set for beginner games from puzzles to horror. The price of such a set is $500, it is possible to find somewhere cheaper."
            },
            createTimestamp: "1602081923"
        },
        {

            id: "y8l73iJfTYBI",
            game: {
                name: "Best VR games",
                description: "In this card you will learn the best VR games!",
                image: {
                    URL: "https://images.immediate.co.uk/production/volatile/sites/3/2022/05/Best-VR-games-78ae89e.jpeg?quality=90&resize=620,413"
                }
            },
            user: {
                avatar: {
                    URL: "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-woman-looking-camera_171337-17994.jpg?w=2000"
                },
                name: "Hari Church",
                review: "Top 5 best VR games!§It's: \"Beat Saber\", \"Astro Bot\", \"Superhot\", \"Budget Cuts\" and... number 1: \"Danger Goat\""
            },
            createTimestamp: "1618478017"
        },
        {

            id: "P2QRUwC0ClBa",
            game: {
                name: "CloudVR cool!",
                description: "VR platform if you have a weak PC!",
                image: {
                    URL: "https://www.roadtovr.com/wp-content/uploads/2020/02/vive-cosmos-elite-virtual-reality.jpg"
                }
            },
            user: {
                avatar: {
                    URL: "https://i.pinimg.com/736x/c8/ff/88/c8ff88ba5d7c2844bfbeaaa0837d1de5.jpg"
                },
                name: "Rohan Pitt",
                review: "Their subscription costs $30/month!§For regular customers, they make a 20% discount."
            },
            createTimestamp: "1613855406"
        },
        {

            id: "fog5nidNrHlz",
            game: {
                name: "Interesting facts on VR",
                description: "We will talk about interesting facts about VR",
                image: {
                    URL: "https://cdn.mos.cms.futurecdn.net/rEhB8U8B7LrVKmj57YgYxC.jpg"
                }
            },
            user: {
                avatar: {
                    URL: "https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg"
                },
                name: "Annette Mcdermott",
                review: "Interest facts!§The first VR headset was patented in the 1960’s and was named the ‘Telesphere Mask’ by inventor Morton Heilig."
            },
            createTimestamp: "1579716490"
        },
        {
            id: "26h7hdH8EXMn",
            game: {
                name: "VR at the event",
                description: "Hologate event!",
                image: {
                    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3okqsjsAnKpsHurahioThAXxGudaTbu9toLmgVMqiSpaCmWDyxXEk7P07lILiENGacyE&usqp=CAU"
                }
            },
            user: {
                avatar: {
                    URL: "https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?w=2000"
                },
                name: "Karan Horton",
                review: "The hologate event was held recently.§At this event, everyone could try to feel themselves in VR. After the survey, 60% would even like to buy it.",
            },
            createTimestamp: "1570533360"
        },
        {
            id: "n524VVrzX8En",
            game: {
                name: "VR have problems?",
                description: "And what problems...",
                image: {
                    URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jaWBp6PrKGb3Cod1ju2cYGcEhW-8ebgQ0buqSFr4tsa8bYRmYrI2DZJfuktjhc96VZ4&usqp=CAU"
                }
            },
            user: {
                avatar: {
                    URL: "https://kbzahntechnik.de/wp-content/uploads/2017/06/Fotolia_118630837_XL-1170x780.jpg"
                },
                name: "Talha Mcgrath",
                review: "VR really have problems...§Many people report headaches, eye strain, dizziness and nausea after using the headsets. Such symptoms are triggered by the VR illusion, which makes the eyes focus on objects apparently in the distance that are actually on a screen just centimetres away."
            },
            createTimestamp: "1594369143"
        },
        {
            id: "36biAg78RMNu",
            game: {
                name: "Shrek swarm",
                description: "...",
                image: {
                    URL: "https://abrakadabra.fun/uploads/posts/2022-03/1646377860_1-abrakadabra-fun-p-boloto-shreka-fon-1.jpg"
                }
            },
            user: {
                avatar: {
                    URL: "https://i.pinimg.com/originals/92/17/a8/9217a86945b10b32d03b1ae913d4af14.jpg"
                },
                name: "Shkek",
                review: "...§What are you doing in my swarm?"
            },
            createTimestamp: "1499674743"
        },
        {
            id: "Dt458Lb5iyLT",
            game: {
                name: "New vr model",
                description: "Oculus anonced new VR model!",
                image: {
                    URL: "http://static.techspot.com/images/products/2019/audio-video/org/2019-05-02-product.png"
                }
            },
            user: {
                avatar: {
                    URL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                },
                name: "Aaron Richard",
                review: "Oculus recently announced a new VR model.§Oculus recently announced a new VR model. The name of the model is rift s, beta testers of the model say that this is the best model."
            },
            createTimestamp: "1620837514"
        },
        {
            id: "yLnB6bTU236j",
            game: {
                name: "VR projects are hyped",
                description: "VR is growing in popularity",
                image: {
                    URL: "https://creativeeurope.in.ua/storage/posts/06082020/1-750.jpg"
                }
            },
            user: {
                avatar: {
                    URL: "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg"
                },
                name: "Cavan Myers",
                review: "Recently, the popularity of VR has grown greatly§VR game makers earned 30% more in the second quarter than in the first."
            },
            createTimestamp: "1589350510"
        },
        {
            id: "B5f8BLki62Jc",
            game: {
                name: "Top vr models",
                description: "List of top VR!!",
                image: {
                    URL: "https://gmedia.playstation.com/is/image/SIEPDC/PSVR2-thumbnail-01-en-22feb22?$facebook$"
                }
            },
            user: {
                avatar: {
                    URL: "https://t3.ftcdn.net/jpg/03/05/77/64/360_F_305776453_t7SUl48g63zLsyODxd60aj6EcWR9avVK.jpg"
                },
                name: "Darin Ruiz",
                review: "I collected the top 5 VR models!§These models are: \"HTC Vive Cosmos\", \"HP Reverb G2\", \"HTC Vive Pro 2\", \"Valve Index\", \"Oculus Quest 2\"."
            },
            createTimestamp: "1660211975"
        },
        {
            id: "vsxPRV2xE857",
            game: {
                name: "VR is available on the phone!",
                description: "You only need a special box!",
                image: {
                    URL: "https://flytechnology.ua/image/cache/catalog/oc_2935product-Ochki-virtualnoy-realnosti-IAC-V2-Cardboard-VR-kit-v-korpuse-iz-kartona_1a9c657fc92baf5387b7f95b4ab5aebc-1000x1000.jpg"
                }
            },
            user: {
                avatar: {
                    URL: "https://img.freepik.com/premium-photo/portrait-charming-young-man-standing-against-white-background_23-2148213403.jpg?w=2000"
                },
                name: "Benjamin Donovan",
                review: "VR has been very expensive lately§But there is a way out, there is a cheap VR option, you just need to buy a special box, insert your phone and enjoy VR."
            },
            createTimestamp: "1620837514"
        },
        {
            id: "6ftuJkM53JV8",
            game: {
                name: "Test item",
                description: "here description...",
                image: {
                    URL: ""
                }
            },
            user: {
                avatar: {
                    URL: ""
                },
                name: "TestUser",
                review: "here review..."
            },
            createTimestamp: "1436516343"
        }
    ]

    if (localStorage.getItem("games")) return JSON.parse(localStorage.getItem("games"));

    localStorage.setItem("games", JSON.stringify(dataCardItems));
    return dataCardItems;
}