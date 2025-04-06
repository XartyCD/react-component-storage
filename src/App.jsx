import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useAppContext, AuthProvider } from "./context/context.jsx"
import "./App.css"
import PublicRoutes from './utils/PublicRoute.jsx'

import MainRouters from "./example-components/SliderComponents/Slider.jsx"
import LoginForm1 from "./example-components/LoginFormComponents/LoginForm1.jsx"
import Slider1 from "./example-components/SliderComponents/Slider.jsx"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<MainRouters />} />
            <Route path="/loginform1" element={<LoginForm1 />} />
            <Route path="/slider1" element={<Slider1 />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
