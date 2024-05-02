import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Primary from "../LayOut/Primary";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";

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
        }
      ]
    },
  ]);

  export default router;