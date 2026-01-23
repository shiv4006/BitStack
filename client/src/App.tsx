import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Header from './components/elements/Header.tsx'
import Footer from './components/elements/Footer.tsx'
import ServicesPage from './components/pages/Services'
import IndustriesPage from './components/pages/Industries'
import AboutPage from './components/pages/About'
import ContactPage from './components/pages/Contact'
import { useEffect } from 'react'
import { useAppDispatch } from './store/hooks.ts'
import { loadUserThunk } from './store/authSlice.ts'
import Login from './components/auth/Login.tsx'
import Signup from './components/auth/Signup.tsx'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUserThunk());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
