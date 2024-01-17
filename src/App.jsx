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
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="pickup">
          <Route index element={<ProtectedRoute>
            <TrashPickup />
          </ProtectedRoute>} />
          <Route path=":bankId" element={<ProtectedRoute>
            <TrashPickupValidation />
          </ProtectedRoute>} />
          <Route path=":bankId/confirmation" element={<ProtectedRoute>
            <TrashPickupConfirmation />
          </ProtectedRoute>} />
        </Route>
        <Route path="product">
          <Route index element={<ProtectedRoute>
            <Product />
          </ProtectedRoute>} />
          <Route path=":productId" element={<ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>} />
        </Route>
        <Route path="admin/product">
          <Route index element={<ProtectedRoute>
            <ProductList />
          </ProtectedRoute>} />
          <Route path=":productId" element={<ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>} />
        </Route>
        <Route path="admin/pickup">
          <Route index element={<ProtectedRoute>
            <PickupConfirmation />
          </ProtectedRoute>} />
          <Route path=":userID" element={<ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
