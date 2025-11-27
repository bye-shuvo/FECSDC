import { createBrowserRouter } from "react-router";
import App from "../App";
import EventPage from "../EventPage/EventPage";
import LeaderboardPage from "../LeaderboardPage/LeaderboardPage";

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
}
])

export default router;