import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import UserDetails from "../Authentication/UserDetails/UserDetails";
import Order from "../Pages/OrderDetails/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/order/:id",
        element: <Cart />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/order/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/details",
        element: <UserDetails />,
      },
      {
        path: "/order",
        element: <Order />,
        loader: () => fetch("http://localhost:5000/product"),
      },
    ],
  },
]);

export default router;
