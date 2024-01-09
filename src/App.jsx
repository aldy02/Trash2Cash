import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import TrashPickup from './pages/TrashPickup'
import Navigation from './components/Navigation'

function App() {

  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/pickup" element={<TrashPickup />} />
      </Routes>
    </div>
  )
}

export default App
