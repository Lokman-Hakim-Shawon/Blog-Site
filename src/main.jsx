import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import AllBlogs from './pages/AllBlogs';
import FeaturedBlogs from './pages/FeaturedBlogs';
import Wishlist from './pages/Wishlist';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Authprovider from './authentication/Authprovider';
import PrivateRout from './authentication/PrivateRout';
import Details from './pages/Details';
import UpdateData from './pages/UpdateData';
import ErrorPage from './pages/ErrorPage';
import PhotoView from './pages/PhotoView';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/add_blog',
        element:<PrivateRout><AddBlog></AddBlog></PrivateRout>
      },
      {
        path:'/all_blogs',
        element:<PrivateRout><AllBlogs></AllBlogs></PrivateRout>
      },
      {
        path:'/featured_blogs',
        element:<FeaturedBlogs></FeaturedBlogs>
      },
      {
        path:'/wishlist',
        element:<PrivateRout><Wishlist></Wishlist></PrivateRout>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/details',
        element:<PrivateRout><Details></Details></PrivateRout>
      },
      {
        path:'/update/:id',
        element:<PrivateRout><UpdateData></UpdateData></PrivateRout>,
        loader:({params})=>fetch(`https://assignment-11-database.vercel.app/datas/${params.id}`)
      }
    ]
  },
   {
    path:'/photo/:id',
    element:<PhotoView></PhotoView>
   }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Authprovider>
       <RouterProvider router={router} />
       </Authprovider>
  </React.StrictMode>,
)
