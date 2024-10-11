import React from "react"
import { Login } from "../../screens/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/Layout";
import { Register } from "../../screens/Register/Register";
const Router = createBrowserRouter([
    {path:"/" , element:<MainLayout/> , children: [
     
    
        
      ]},
      
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },

        
])

export { Router };