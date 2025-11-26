import { createBrowserRouter } from "react-router";
import App from "../App";
import Events from "../EventPage/Events";

const router = createBrowserRouter([{
    path : "/" ,
    element : <App />
},
{
    path : "/events" ,
    element : <Events />
}
])

export default router;