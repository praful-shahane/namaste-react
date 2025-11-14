  import React from "react";
  import ReactDOM from "react-dom/client";
  import HeaderComponent from "./components/HeaderComponent" 
  // we can write extension as well  import HeaderComponent from "./components/HeaderComponent.js"
  import BodyComponent from "./components/BodyComponent";
  import RestaurantMenuCard from "./components/RestaurantMenuCard";
  // import { createBrowserRouter,RouterProvider } from "react-router-dom"; //This is wrong import statement
  import { createBrowserRouter,RouterProvider ,Outlet} from "react-router"; //This is correct import statement
  import About from "./components/About";
  import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayOut =()=>{

    console.log(<BodyComponent />);
    
  return (
  <div className="app">
    <HeaderComponent />
  {/** How to load Component based on path, react Router DOM comes to rescue.
   * it gives us something like Outlet. 
   * Outlet will load the component based on the path we provide in the URL. */}
    <Outlet />
  </div>);
};

/**
 * createBrowserRouter is used to create a router object.
 * We can define multiple routes inside the array we pass to createBrowserRouter.
 * Each route is an object with path and element properties.
 * path: URL path for the route.
 * element: React component to be rendered for that route.
 * Here, we have defined two routes:
 * 1) "/" route which renders AppLayOut component.
 * 2) "/about" route which renders About component.
 * 3) "/contact" route which renders Contact component.
 * errorElement: React component to be rendered in case of an error.
 * children: Array of child routes for nested routing.
 * Each child route is also an object with path and element properties.
 */
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayOut/>,
    children:[
      {
      path:"/",
       element:<BodyComponent/>
    },

    {
      path:"/about",
       element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/restaurant/:resId/:resName",  // resId is a dynamic parameter. to write we use /: before the parameter name.
      element:<RestaurantMenuCard/>
    }
    ],
    errorElement: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />);