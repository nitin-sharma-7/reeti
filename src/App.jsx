import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollTop from './components/common/ScrollTop'

function App() {
  return (
    <div className="min-h-screen bg-white">
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
