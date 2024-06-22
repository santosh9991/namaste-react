import ReactDOM from "react-dom/client";
import React, { lazy, Suspense, useState } from "react";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import "./index.css";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
// import Grocery from "./src/components/Grocery";

const AppLayout = () => {
  const [userName, setUserName] = useState('Login')
  return (
    //provider provides store to the application
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>

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
    },
    {
      path: '/cart',
      element: <Cart/>
    } 
  ],
    errorElement: <Error/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
