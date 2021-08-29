export const newSeason = [
    {
        id: 1,
        name: "Barbarians",
        thumbnail: require("../assets/images/images/series/barbarians/barbarians_cover.jpg"),
        details: {
            image: require("../assets/images/images/series/barbarians/barbarians.jpg"),
            coverImage: "../../assets/images/images/series/barbarians/barbarians_cover.jpg",
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    },
    {
        id: 2,
        name: "Bridgerton",
        thumbnail: require("../assets/images/images/series/bridgerton/bridgerton_cover.jpg"),
        details: {
            image: require("../assets/images/images/series/bridgerton/bridgerton.jpg"),
            coverImage: "../../assets/images/images/series/bridgerton/bridgerton_cover.jpg",

            age: "18+",
            genre: "Romance",
            ratings: 7.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 3,
        name: "Money Heist",
        thumbnail: require("../assets/images/images/series/money_heist/money_heist_cover.jpg"),
        details: {
            image: require("../assets/images/images/series/money_heist/money_heist.jpg"),
            coverImage: "../../assets/images/images/series/money_heist/money_heist.jpg",
            age: "16+",
            genre: "Crime",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 4,
        name: "Salvation",
        thumbnail: require("../assets/images/images/series/salvation/salvation_cover.jpg"),
        details: {
            image: require("../assets/images/images/series/salvation/salvation.jpg"),
            coverImage: "../../assets/images/images/series/salvation/salvation_cover.jpg",
            age: "13+",
            genre: "Sci-Fi",
            ratings: 7.0,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Pilot"',
            runningTime: "45m",
            progress: "0%"
        }
    },
]
export const continueWatching = [
    {
        id: 1,
        name: "Prison Break",
        thumbnail: require("../assets/images/images/series/prison_break/prison_break_cover.jpg"),
        overallProgress: "20%",
        details: {
            image: require("../assets/images/images/series/prison_break/prison_break.webp"),
            coverImage: "../../assets/images/images/series/prison_break/prison_break_cover.jpg",
            age: "16+",
            genre: "Action",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E8 "Episode 8 : The Old Head"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 2,
        name: "House of Cards",
        thumbnail: require("../assets/images/images/series/house_of_cards/house_of_cards_cover.jpg"),
        overallProgress: "50%",
        details: {
            image: require("../assets/images/images/series/house_of_cards/house_of_cards.jpg"),
            coverImage: "../../assets/images/images/series/house_of_cards/house_of_cards_cover.jpg",
            age: "16+",
            genre: "Political Drama",
            ratings: 8.7,
            season: "SEASON 1",
            currentEpisode: 'S4 : E1 "Chapter 40"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 3,
        name: "Bridgerton",
        thumbnail: require("../assets/images/images/series/bridgerton/bridgerton_cover.jpg"),
        overallProgress: "70%",
        details: {
            image: require("../assets/images/images/series/bridgerton/bridgerton.jpg"),
            coverImage: "../../assets/images/images/series/bridgerton/bridgerton_cover.jpg",
            age: "18+",
            genre: "Romance",
            ratings: 7.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E6 "Episode 6 : Swish"',
            runningTime: "45m",
            progress: "50%"
        }
    },
    {
        id: 4,
        name: "Money Heist",
        thumbnail: require("../assets/images/images/series/money_heist/money_heist_cover.jpg"),
        overallProgress: "40%",
        details: {
            image: require("../assets/images/images/series/money_heist/money_heist.jpg"),
            coverImage: "../../assets/images/images/series/money_heist/money_heist_cover.jpgg",
            age: "16+",
            genre: "Crime",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E15 "Episode 15 : Bella ciao"',
            runningTime: "45m",
            progress: "50%"
        }
    },
]

const dummyData = { newSeason, continueWatching };

export default dummyData;