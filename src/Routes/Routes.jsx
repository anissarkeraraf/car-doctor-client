import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Primary from "../LayOut/Primary";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Primary></Primary>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/bookings',
        element: <Bookings></Bookings>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/serivices/${params.id}`)
      }
    ]
  },
]);

export default router;