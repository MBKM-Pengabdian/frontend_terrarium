import { Dashboard } from "./pages/dashboard"
import { Login } from "./pages/auth/login/Login"
import { Register } from "./pages/auth/register/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoutes';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
