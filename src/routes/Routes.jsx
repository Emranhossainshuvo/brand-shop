import Root from './../Layout/root/Root'
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from '../pages/Login/Login';
import Register from '../pages/register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AddProduct from '../components/addProduct/AddProduct';
import MyCart from '../components/myCart/MyCart';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root> , 
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/', 
                element: <Home></Home>, 
                loader: () => fetch (' https://brand-shop-server-gm6ovoet3-shuvos-projects-7bea5cfb.vercel.app/product')
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }, 
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }, 
            {
                path: '/mycart', 
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            }
        ]
    }
])

export default router; 