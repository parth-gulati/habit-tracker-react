import { useState } from 'react'
import './App.css'
import Splash from './pages/Splash'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './common/Layout'
import SignIn from './pages/SignIn'
import PrivateWrapper from './common/PrivateRoute';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            (
              <PrivateWrapper auth={{ isAuthenticated }}>
                <Splash />
              </PrivateWrapper>
            )
          } />
          <Route path='/signin' element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
