import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/AuthLayout";
import Section from "../components/Section";



export const Router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout/>,
        children: [
          {
            path:'/',
            element:<Navigate to={'/category/01'}/>
          },
          {
            path:'/category/:id',
            element:<Section/>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout/>
    },
    {
        path:'/auth',
        element:<AuthLayout/>
    },
    {
        path:'*',
        element:<p>Error</p>
    }
])