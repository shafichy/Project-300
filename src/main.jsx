import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
