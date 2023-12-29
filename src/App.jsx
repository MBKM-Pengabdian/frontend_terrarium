import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

// Dashboard
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/auth/login/Login';
import { Register } from './pages/auth/register/Register';
import { ProductDashboard } from './pages/dashboard/pages/product';

// Main Page
import { Home, Product, Event } from './pages/main-page';
import { Navbar } from './pages/main-page/components/navbar/Navbar';
import { Footer } from './pages/main-page/components/footer/Footer';
import PrivateRoute from './routes/PrivateRoutes';

const AppWrapper = () => {
  const location = useLocation();

  // tambahkan path untuk module dashboard saja 
  const excludePaths = [
    '/dashboard',
    '/dashboard/product',
    '/login',
    '/register'
  ];

  const shouldExcludeNavbarFooter = excludePaths.includes(location.pathname);

  return (
    <>
      {!shouldExcludeNavbarFooter && <Navbar />}
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/product" element={<Product />} />

        {/* Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/dashboard/product" element={<ProductDashboard />} />
      </Routes>
      {!shouldExcludeNavbarFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
