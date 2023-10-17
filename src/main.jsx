import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./pageLayOut/Error page/ErrorPage.jsx";
import Home from "./pageLayOut/Home/Home.jsx";
import Login from "./pageLayOut/Login/Login.jsx";
import Register from "./pageLayOut/Register/Register.jsx";
import AddProduct from "./pageLayOut/AddProduct/AddProduct.jsx";
import MyCart from "./pageLayOut/MyCart/MyCart.jsx";
import About from "./pageLayOut/About/About.jsx";
import Contact from "./pageLayOut/Contact/Contact.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./brand.json"),
      },
      {
        path: "/add",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
