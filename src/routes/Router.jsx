import { createBrowserRouter } from "react-router-dom";


export const Router = createBrowserRouter([
    {
        path:'/',
        element:<p>home</p>
    },
    {
        path:'/news',
        element:<p>News</p>
    },
    {
        path:'/auth',
        element:<p>Login</p>
    },
    {
        path:'*',
        element:<p>Error</p>
    }
])