import { createBrowserRouter } from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Blog from "../components/pages/Blog/Blog";
import Artlicle from "../components/pages/Article/Artlicle";
import NotFound from "../components/pages/NotFound/NotFound";
import Error from "../components/pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement: <Error />,
    },
    {
        path: "/articles/:post_id",
        element: <Artlicle />,
        errorElement: <Error />,
    },
    {
        path: "*",
        element: <NotFound />,
        errorElement: <Error />,
    },
]);

export default router;
