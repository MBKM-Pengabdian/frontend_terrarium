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
import { Home, Product, Event, DetailEvent, AboutPage, ContactPage, LoginCustomer, RegisterCustomer } from './pages/main-page';
import { Navbar } from './pages/main-page/components/navbar/Navbar';
import { Footer } from './pages/main-page/components/footer/Footer';
import PrivateRoute from './routes/PrivateRoutes';
import { PageNotFound } from './pages/notfound';

const AppWrapper = () => {
  const location = useLocation();

  // tambahkan path untuk module dashboard saja 
  const excludePaths = [
    '/dashboard',
    '/dashboard/product',
    '/dashboard/event',
    '/login',
    '/user-login',
    '/register',
    '/user-register',
    '/*',
  ];

  const shouldExcludeNavbarFooter = excludePaths.includes(location.pathname);

  return (
    <>
      {!shouldExcludeNavbarFooter && <Navbar />}
      <Routes>
        {/* Main Page */}
        <Route path="/user-login" element={<LoginCustomer />} />
        <Route path="/user-register" element={<RegisterCustomer />} />
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/detail-event/:id" element={<DetailEvent />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dashboard */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/dashboard/product" element={<ProductDashboard />} />
        <Route path="/dashboard/event" element={<EventDashboard />} />

        <Route path="*" element={<PageNotFound />} />
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
