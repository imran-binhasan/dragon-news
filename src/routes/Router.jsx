import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NewsLayout from "../layouts/NewsLayout";
import AuthLayout from "../layouts/AuthLayout";
import NewsList from "../components/NewsList";
import Login from "../components/Login";
import Register from "../components/Register";




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
            element:<NewsList/>,
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
        element:<AuthLayout/>,
        children: [
          {
            path:'/auth',
            element:<Navigate to={'/auth/login'}/>
          },
          {
            path: '/auth/login',
            element: <Login/>
          },
          {
            path: '/auth/register',
            element: <Register/>
          }
        ]
    },
    {
        path:'*',
        element:<p>Error</p>
    }
])