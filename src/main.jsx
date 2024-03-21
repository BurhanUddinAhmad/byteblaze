import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import Blogs from './Pages/Blogs.jsx';
import Bookmarks from './Pages/Bookmarks.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }, 
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/bookmarks',
        element: <Bookmarks/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
