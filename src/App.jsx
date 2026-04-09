import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollTop from './components/common/ScrollTop'
import DiscountPopup from './components/common/DiscountPopup'

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <DiscountPopup />
      <Header 
        img="/reeti-logo.png" 
        img2="/reeti-logo.png" 
      />
      <main className="">
        <Outlet />
        <ScrollTop/>
      </main>
      <Footer />
    </div>
  )
}

export default App
