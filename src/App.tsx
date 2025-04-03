import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router'
import { MultiStepForm } from './projects/multi-step-form'

function App() {

  return (
    <BrowserRouter>
      <nav style={{display: 'flex', gap: '1rem'}}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
        }>
          Home
        </NavLink>
        <NavLink
          to="/multi-step-form"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
        }>
          Multi Step Form
        </NavLink>
      </nav>
      <Routes >
        <Route index element={<>Test</>} />
        <Route path='/multi-step-form' element={<MultiStepForm />} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
