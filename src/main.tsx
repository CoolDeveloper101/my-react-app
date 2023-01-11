import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './layouts/App'
import Home from './pages/home' 
// import Expenses from './pages/expenses'
// import Invoices from './pages/invoices'

const Expenses = React.lazy(() => import("./pages/expenses"))
const Invoices = React.lazy(() => import("./pages/invoices"))

const root = ReactDOM.createRoot(
  document.getElementById('root')!
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="expenses" element={
            <React.Suspense fallback={<>...</>}>
              <Expenses />
            </React.Suspense>
          } />
          <Route path="invoices" element={
            <React.Suspense fallback={<>...</>}>
              <Invoices />
            </React.Suspense>
          } />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Error! 404 Page Not Found :(</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
