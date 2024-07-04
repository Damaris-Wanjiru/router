import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/Settings.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import Products from './components/Products.jsx';


const router = createBrowserRouter([  //define your objects
  {   //default
    path: '/',        
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/Profile',
    element: <Profile />
  },
  {
    path: '/Profile/:profileId',
    element: <Profile />
  },
  {
    path: '/Settings',
    element: <Settings />
  },
  {
    path: '/Settings/:settingsId',
    element: <Settings />
  },
  {
    path: '/products',
    element: <Products />
  },
  

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>  
  </React.StrictMode>,
)
