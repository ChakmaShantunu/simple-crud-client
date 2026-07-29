import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from './layouts/Mainlayout.jsx';
import UserDetails from './components/UserDetails.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import UpdateUser from './components/UpdateUser.jsx';
import UpdateProducts from './components/UpdateProducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: App
      },
      {
        path: "/users/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UserDetails
      },
      {
        path: "/products/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails
      },
      {
        path: "/update/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UpdateUser
      },
      {
        path: "/update/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: UpdateProducts
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
