// import logo from './logo.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

/** 
 * The main layout of the whole website.
 * Ideally, it should change based on the authentication state of the user.
 */
function App() {
  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
