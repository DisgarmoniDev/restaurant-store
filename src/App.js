import {Routes, Route} from 'react-router-dom'

import MainPage from './pages/MainPage'
import BasketPage from './pages/BasketPage'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound' 
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegisterPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
