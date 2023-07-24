import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import ProjectPage from "../pages/project/ProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>!!</div>,
    children: [
      {
        path: 'ru',
        element: <div>
          <Outlet />
        </div>
        // children: [
        //   {
        //     path: '',
        //     element: <HomePage />
        //   },
        //   {
        //     path: "/project",
        //     element: <ProjectPage />,
        //   },
        // ]
      }
    ]
  },
]);
