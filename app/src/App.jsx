import { useState } from 'react'
import './App.css'
import Splash from './pages/Splash'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './common/Layout'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import PrivateWrapper from './common/PrivateRoute';
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import useToken from './helpers/useToken'

function App() {
  const { token, removeToken, setToken } = useToken();
  console.log({token, removeToken, setToken})
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route element={<Layout token={!!token} removeToken={removeToken} />}>
          <Route path="/" element={
            (
              <PrivateWrapper auth={{ token: !!token }}>
                <Dashboard />
              </PrivateWrapper>
            )
          } />
          <Route path='/signin' element={<SignIn token={token} setToken={setToken} />} />
          <Route path='/signup' element={<SignUp token={token} setToken={setToken} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
