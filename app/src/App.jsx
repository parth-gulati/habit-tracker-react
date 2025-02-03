import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './common/Layout'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import PrivateWrapper from './common/PrivateRoute';
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import useToken from './context/useToken'
import NewHabit from './pages/NewHabit';
import { UserProvider } from './context/UserContext';

function App() {
  const { token, removeToken, setToken } = useToken();
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route element={<Layout token={token} removeToken={removeToken} />}>
            <Route element={<PrivateWrapper auth={{ token: token }} />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route element={<PrivateWrapper auth={{ token: token }} />}>
              <Route path="/new-habit" element={<NewHabit />} />
            </Route>
            <Route path='/signin' element={<SignIn token={token} setToken={setToken} />} />
            <Route path='/signup' element={<SignUp token={token} setToken={setToken} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
