import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import { ErrorPage } from "../pages/common/ErrorPage";
import { NotFoundPage } from "../pages/common/NotFoundPage";
import RedirectPage from "../pages/common/RedirectPage";
import HomeUILayout from "../layout/Home/HomeLayout";
import AboutUs from "@/pages/companyPages/AboutUs/AboutUs";
import DeepLearning from "@/pages/blogPages/DeepLearning/DeepLearning";
import MachineLearning from "@/pages/blogPages/MachineLearning/MachineLearning";
import Python from "@/pages/blogPages/python/Python";
import JoinOurTeams from "@/pages/companyPages/Careers/JoinOurTeams";
import OurStartups from "@/pages/companyPages/OurStartups/OurStartups";
import ResearchPapers from "@/pages/ResearchPapers/ResearchPapers";
import DataScience from "@/pages/blogPages/DataScience/DataScience";
import MLVlogDetail from "@/pages/blogPages/MachineLearning/MLVlogDetails";

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

        // Compny pages

        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/join-our-team",
          element: <JoinOurTeams />,
        },
        {
          path: "/our-startups",
          element: <OurStartups />,
        },

        // Blog Pages
        {
          path: "/deep-learning-blog",
          element: <DeepLearning />,
        },

        {
          path: "/machine-learning-blog",
          element: <MachineLearning />,
        },
        {
          path: "/machine-learning-blog/:id",
          element: <MLVlogDetail />,
        },
        {
          path: "/data-science-blog",
          element: <DataScience />,
        },
        {
          path: "/python-blog",
          element: <Python />,
        },

        // research paper
        {
          path: "/research-papers",
          element: <ResearchPapers />,
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
