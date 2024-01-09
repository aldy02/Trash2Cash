import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<div>test</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
