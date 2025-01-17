import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile"
import Favorites from "./pages/favorites/favorites"
import Shopping_Cart from "./pages/shopping_cart/shopping_cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "profile",
    element: <Profile/>,
  },
  {
    path: "favorites",
    element: <Favorites/>,
  },
  {
    path: "shopping_cart",
    element: <Shopping_Cart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
