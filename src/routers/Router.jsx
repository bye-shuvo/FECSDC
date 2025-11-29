import { createBrowserRouter } from "react-router";
import App from "../App";
import EventPage from "../EventPage/EventPage";
import LeaderboardPage from "../LeaderboardPage/LeaderboardPage";
import AboutPage from "../AboutPage/AboutPage";
import RoadmapPage from "../RoadmapPage/RoadmapPage";

const router = createBrowserRouter([{
    path : "/" ,
    element : <App />
},
{
    path : "/events" ,
    element : <EventPage />
},
{
    path : "/leaderboard" ,
    element : <LeaderboardPage />
},
{
    path : "/about" ,
    element : <AboutPage />
},
{
    path : "/roadmap" ,
    element : <RoadmapPage />
}
])

export default router;