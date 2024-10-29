import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Users from './components/Users.jsx';
import Privacy from './components/Privacy.jsx';
import UserDetails from './components/UserDetails.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/privacy',
        element: <Privacy />,
        loader: () =>
          fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/users/:id',
        element: <UserDetails />,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      }


    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
