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
import { EventDashboard } from './pages/dashboard/pages/events';

// Main Page
import { Home, Product, Event, DetailEvent } from './pages/main-page';
import { Navbar } from './pages/main-page/components/navbar/Navbar';
import { Footer } from './pages/main-page/components/footer/Footer';
import PrivateRoute from './routes/PrivateRoutes';

const AppWrapper = () => {
  const location = useLocation();

  // tambahkan path untuk module dashboard saja 
  const excludePaths = [
    '/dashboard',
    '/dashboard/product',
    '/dashboard/event',
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
        <Route path="/detail-event/:id" element={<DetailEvent />} />
        <Route path="/product" element={<Product />} />

        {/* Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/dashboard/product" element={<ProductDashboard />} />
        <Route path="/dashboard/event" element={<EventDashboard />} />
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
