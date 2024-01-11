import { Routes, Route } from 'react-router-dom';
import TrashPickup from './pages/TrashPickup';
import SignIn from './pages/SignIn';
// import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pickup" element={<TrashPickup />} />
      </Routes>
    </div>
  );
}

export default App;
