import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Gallery from './pages/Gallery'
import BookEvent from './pages/BookEvent'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black font-body text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<BookEvent />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
