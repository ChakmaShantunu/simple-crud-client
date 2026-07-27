
import { Suspense } from 'react';
import './App.css'
import Users from './components/Users'

function App() {

  const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());

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
    </>
  )
}

export default App
