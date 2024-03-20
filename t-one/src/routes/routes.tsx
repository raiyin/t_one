import { createBrowserRouter } from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Blog from "../components/pages/Blog/Blog";
import Artlicle from "../components/pages/Article/Artlicle";
import NotFound from "../components/pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFound />,
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement: <NotFound />,
    },
    {
        path: "/article",
        element: <Artlicle />,
        errorElement: <NotFound />,
    },
]);

export default router;
