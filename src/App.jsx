import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import TrashPickup from './pages/TrashPickup'
import Navigation from './components/Navigation'
import TrashPickupValidation from './pages/TrashPickupValidation'
import TrashPickupConfirmation from './pages/TrashPickupConfirmation'
import Product from './pages/Product'

function App() {

  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/pickup" element={<TrashPickup />} /> */}
        <Route path="pickup">
          <Route index element={<TrashPickup />} />
          <Route path=":bankId" element={<TrashPickupValidation />} />
          <Route path=":bankId/confirmation" element={<TrashPickupConfirmation />} />
        </Route>
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
