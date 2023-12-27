import { Link, useLocation } from 'react-router-dom';
import Logo from './../../../../assets/img/logo.png';

export const Navbar = () => {
   const location = useLocation();

   return (
      <nav className="navbar navbar-expand-lg bg-white">
         <div className="container-fluid">
            <Link className="navbar-brand h3" to="/">
               <img src={Logo} alt="Logo" width={70} />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`} to="/product">
                        Product
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link className={`nav-link ${location.pathname === '/event' ? 'active' : ''}`} to="/event">
                        Event
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav >
   );
};
