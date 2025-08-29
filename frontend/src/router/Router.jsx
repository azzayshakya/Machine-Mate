import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import { ErrorPage } from "../pages/common/ErrorPage";
import { NotFoundPage } from "../pages/common/NotFoundPage";
import RedirectPage from "../pages/common/RedirectPage";
import HomeUILayout from "../layout/Home/HomeLayout";
import AboutUs from "@/pages/companyPages/AboutUs/AboutUs";
import DeepLearning from "@/pages/blogPages/DeepLearning/DeepLearning";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeUILayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
       {
          path: "/deep-learning",
          element: <DeepLearning />,
        },
        {
          path: "/deep-learning",
          element: <DeepLearning />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
        {
          path: "/redirect",
          element: <RedirectPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  // { basename: import.meta.env.BASE_URL }
);

export default router;
