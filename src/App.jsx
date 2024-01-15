import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom'
import TrashPickup from './pages/TrashPickup'
import Navigation from './components/Navigation'
import TrashPickupValidation from './pages/TrashPickupValidation'
import TrashPickupConfirmation from './pages/TrashPickupConfirmation'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import PickupConfirmation from './pages/PickupConfirmation'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
