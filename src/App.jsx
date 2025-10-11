import { useState } from 'react'
import Navbar from './components/Navbar'
import AuraCalculator from './components/AuraCalculator'
import Footer from './components/Footer'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        {/* <AuraCalculator /> */}
        <Outlet />
        <Footer />

      </div>
    </>
  )
}

export default App
