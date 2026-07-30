import { Suspense } from 'react';
import './App.css'
import Users from './components/Users'
import Products from './components/Products';
import AddCategory from './components/AddCatetgory';


const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());
const productsPromise = fetch("http://localhost:3000/products").then(res => res.json());

function App() {


  return (
    <>
      <br />
      <br />
      <h1>Simple Crud Operation</h1>
      <br />
      <br />
      <Suspense fallback={<p>Loading users...</p>}>
        <Users usersPromise={usersPromise}></Users>
      </Suspense>
      <br />
      <br />
      <Suspense fallback={<p>Loading users...</p>}>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
      <br />
      <br />
      <AddCategory></AddCategory>
    </>
  )
}

export default App
