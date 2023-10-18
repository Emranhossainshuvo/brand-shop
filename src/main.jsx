import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './layouts/ErrorPage/ErrorPage';
import Main from './components/Main';
import Home from './layouts/Home/Home';
import Login from './layouts/login/Login';
import Register from './layouts/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>, 
    children: [
          {
            path: '/', 
            element: <Home></Home> 
          }, 
         
    ]
  },
  {
    path: '/login', 
    element: <Login></Login>
  }, 
  {
    path: '/register', 
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
