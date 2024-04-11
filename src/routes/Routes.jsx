import { Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Competition from "../pages/Competition";
import Great from "../pages/Great";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import Rating from "../pages/Rating";
import SpainToWin from "../pages/SpainToWin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/:id",
        element: <Layout />,
        children: [
          {
            path: "/:id",
            element: <Home />,
          },
          {
            path: "/:id/rating",
            element: <Rating />,
          },
          {
            path: "/:id/great",
            element: <Great />,
          },
          {
            path: "/:id/spintowin",
            element: <SpainToWin />,
          },
          {
            path: "/:id/competition",
            element: <Competition />,
          },
        ],
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
