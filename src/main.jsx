import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route , Routes } from 'react-router'
import Layout from './layout/Layout.jsx'
import { Home } from './pages/Home.jsx'
import AdminLoginComp from './components/AdminLoginComp.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import Signup from './pages/Signup.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>

    <Route element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path='/login' element={<AdminLoginComp />} />
    <Route path='/signup' element={<Signup />} />
    </Route>

    <Route path='/dashboard' element={<DashboardPage />} />
  </Routes>
  </BrowserRouter>
)
