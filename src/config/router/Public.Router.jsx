import React from "react"
import { Login } from "../../screens/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/Layout";
import { Register } from "../../screens/Register/Register";
import { Forgotpass } from "../../screens/forgotpass/ForgotPass";

const Router = createBrowserRouter([
    {path:"/" , element:<MainLayout/> , children: [
     
    
        
      ]},
      
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/forgotpass', element: <Forgotpass/> },

        
])

export { Router };