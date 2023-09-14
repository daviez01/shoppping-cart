import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Store from './pages/Store/Store'
import Navbar from './components/Navbar/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <div className='app'>
        <Navbar />
        <div className="div">
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
