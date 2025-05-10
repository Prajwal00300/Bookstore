import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import { UploadBook } from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/shop",
            element: <Shop></Shop>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path:"/blog",
            element: <Blog></Blog>
        },
        {
            path:"/book/:id",
            element:<SingleBook></SingleBook>,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }

      ],
    },
    {
        path:"/admin/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children:[
            {
                path:"/admin/dashboard",
                element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            }, 
            {
                path:"/admin/dashboard/upload", 
                element:<UploadBook></UploadBook>
            },
            {
                path : "/admin/dashboard/manage",
                element: <ManageBooks></ManageBooks>
            },
            {
                path : "/admin/dashboard/edit-books/:id",
                element : <EditBooks></EditBooks>,
                loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)

            }
        ]

    },
    {
        path: "sign-up",
        element: <Signup></Signup> 
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "logout",
        element: <Logout></Logout>
    }
  ]);
  export default router;