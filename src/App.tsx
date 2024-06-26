
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Outlet />
    </>
  )
}

export default App
