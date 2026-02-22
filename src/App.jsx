import { Suspense } from 'react';
import './App.css'
import Counter from './Count'
import Users from './Users';

const fetchUsers = async () => {
  const url = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = url.json();
  return data
}

function App() {
  const fetchData = fetchUsers();

  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchData}></Users>
      </Suspense>
      
      <Counter></Counter>
    </>
  )
}

export default App
