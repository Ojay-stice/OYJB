import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route , Routes } from 'react-router'
import Layout from './layout/Layout.jsx'
import { Home } from './pages/Home.jsx'
import AdminLoginComp from './components/AdminLoginComp.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path='/login' element={<AdminLoginComp />} />
    </Route>
  </Routes>
  </BrowserRouter>
)
