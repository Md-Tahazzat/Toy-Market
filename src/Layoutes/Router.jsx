import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Registration/Login";
import Register from "../Pages/Registration/Register";
import FileNotFound from "../Pages/FileNotFount/FileNotFound";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <FileNotFound></FileNotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addedToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://my-toy-market-server.vercel.app/addedToys"),
      },
      {
        path: "/toy/add",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-toy-market-server-md-tahazzat.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
