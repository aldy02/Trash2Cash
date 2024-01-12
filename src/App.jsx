import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import TrashPickup from './pages/TrashPickup'
import Navigation from './components/Navigation'
import TrashPickupValidation from './pages/TrashPickupValidation'
import TrashPickupConfirmation from './pages/TrashPickupConfirmation'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import PickupConfirmation from './pages/PickupConfirmation'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Homepage</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="pickup">
          <Route index element={<TrashPickup />} />
          <Route path=":bankId" element={<TrashPickupValidation />} />
          <Route path=":bankId/confirmation" element={<TrashPickupConfirmation />} />
        </Route>
        <Route path="product">
          <Route index element={<Product />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="admin/product">
          <Route index element={<ProductList />} />
          <Route path=":productId" element={<AddProduct />} />
        </Route>
        <Route path="admin/pickup">
          <Route index element={<PickupConfirmation />} />
          <Route path=":userID" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
