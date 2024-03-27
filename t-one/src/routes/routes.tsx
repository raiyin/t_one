import { createBrowserRouter } from "react-router-dom";
import Main from "../components/pages/Main/Main";
import Blog from "../components/pages/Blog/Blog";
import ArticleBlock from "../components/pages/Article/Article";
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
        element: <ArticleBlock />,
        errorElement: <Error />,
    },
    {
        path: "*",
        element: <NotFound />,
        errorElement: <Error />,
    },
]);

export default router;
