  import React, { lazy, Suspense, useEffect, useState } from "react";
  import ReactDOM from "react-dom/client";
  import HeaderComponent from "./components/HeaderComponent" 
  // we can write extension as well  import HeaderComponent from "./components/HeaderComponent.js"
  import BodyComponent from "./components/BodyComponent";
  import RestaurantMenuCard from "./components/RestaurantMenuCard";
  // import { createBrowserRouter,RouterProvider } from "react-router-dom"; //This is wrong import statement
  import { createBrowserRouter,RouterProvider ,Outlet} from "react-router"; //This is correct import statement
  // import About from "./components/About";
  import Contact from "./components/Contact";
import Error from "./components/Error";
//import Grocery from "./components/Grocery";
import  UserContext from "./utils/UserContext";
import CartComponent from "./components/CartComponent";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";


//lazy is function which takes function as an argument which returns a dynamic import.
//import() is a function which is used to dynamically import a module.
//inside the import() we have to provide the path of the module we want to import.
const Grocery = lazy(()=>import("./components/Grocery")); 


const About = lazy(()=>import( "./components/About"));

const AppLayOut =()=>{

    console.log(<BodyComponent />);

           const [userName,setUserName]= useState();
       //Authetication code written to identify the user
        useEffect(()=>{
           //Make API call to get the user info by sending userName & password
           const data={
            name:"Praful Shahane"
           }

           setUserName(data.name);
           
        },[]);

           
  const datanew="Data User";
    
  return (
    <Provider store={appStore}>

    <UserContext.Provider value={{loggedInUser : userName,setUserName , datanew}} >
  <div className="app">
    <HeaderComponent />
    <Outlet />
  </div>
        </UserContext.Provider>
        </Provider>
);
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
       element: (<Suspense fallback={<h1>Loading....</h1>}>
    <About/>
      </Suspense> )
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"/grocery",
      element: (<Suspense fallback={<h1>Loading....</h1>}>
      <Grocery/>
      </Suspense> )
    },{
      path:"/restaurant/:resId/:resName",  // resId is a dynamic parameter. to write we use /: before the parameter name.
      element:<RestaurantMenuCard/>
    },{
      path:"/cart",
      element:<CartComponent/>
    }
    ],
    errorElement: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter} />);