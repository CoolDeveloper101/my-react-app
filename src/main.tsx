import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './layouts/App'
import Expenses from './pages/expenses'
import Invoices from './pages/invoices'


const root = ReactDOM.createRoot(
  document.getElementById('root')!
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='' element={<h2>Home</h2>} />
          <Route path="expense" element={<Navigate to="/expenses" />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Error! 404 Page Not Found</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
