import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path: "/",
            element: <Home/>,

        },
        {
            path: "/Services",
            element: <Services/>,

        },

        {
          path: "/about",
          element: <About/>,



            
        }
      ]
    },
  ]);


export default router ;