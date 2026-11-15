
import './App.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './assets/pages/Home';
import Aboutus from './assets/pages/Aboutus';
import Mainlayout from './layouts/Mainlayout';
import Weather from './assets/pages/Weather';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index : true , 
        element : <Home />
      },{
        path:"/weather",
        element: <Weather />
      }
    ]
  },
  {
    path: "/aboutus", 
    Component: Mainlayout,
    children: [
      {
        index : true , 
    element: <Aboutus></Aboutus>
      }
    ]
  },
]);
function Router() {

  return (
   <>
  <RouterProvider router={router} />,
   </>
  )
}

export default Router
