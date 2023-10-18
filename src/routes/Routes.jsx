import Root from './../Layout/root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from '../pages/Login/Login';
import Register from '../pages/register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root> , 
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }
        ]
    }
])

export default router; 