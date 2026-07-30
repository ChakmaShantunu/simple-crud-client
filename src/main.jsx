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
import CategoryDetails from './components/CategoryDetails.jsx';
import UpdateCategory from './components/UpdateCategory.jsx';

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
        path: "/categories/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`),
        Component: CategoryDetails
      },
      {
        path: "/update/user/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
        Component: UpdateUser
      },
      {
        path: "/update/product/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: UpdateProducts
      },
      {
        path: '/update/category/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`),
        Component: UpdateCategory
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
