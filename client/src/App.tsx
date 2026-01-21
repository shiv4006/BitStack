import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Header from './components/elements/Header.tsx'
import Footer from './components/elements/Footer.tsx'
import ServicesPage from './components/pages/Services'
import IndustriesPage from './components/pages/Industries'
import AboutPage from './components/pages/About'
import ContactPage from './components/pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
