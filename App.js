import ReactDOM from "react-dom/client";
import React, { lazy, Suspense } from "react";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import "./index.css";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const Grocery = lazy(()=>import('./src/components/Grocery'))
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/home',
        element: <Body/>
      },
      {
      path: '/about',
      element: <About/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {path: '/grocery',
      element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>},
    {
      path: '/restaurants/:resId',
      element: <RestaurantMenu/>
    }  
  ],
    errorElement: <Error/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
