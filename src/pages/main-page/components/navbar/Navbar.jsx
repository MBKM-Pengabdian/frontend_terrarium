import { Link, useLocation } from "react-router-dom";
import Logo from "./../../../../assets/img/logo.png";
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import AuthService from "../../../../services/auth.service";

export const Navbar = () => {
  const location = useLocation();
  const authService = AuthService();

  const handleLogout = () => {
    authService.handleLogoutCustomer();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary text-dark bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width={70} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <Link
                  className={`nav-link fw-bold fs-6 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className={`nav-link fw-bold fs-6 ${
                    location.pathname === "/product" ? "active" : ""
                  }`}
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className={`nav-link fw-bold fs-6 ${
                    location.pathname === "/event" ? "active" : ""
                  }`}
                  to="/event"
                >
                  Event
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className={`nav-link fw-bold fs-6 ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className={`nav-link fw-bold fs-6 ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {window.localStorage.getItem("customer_id") ? (
              <ul className="navbar-nav ms-auto me-4">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-bold"
                    href="#"
                    id="ourProductDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <FaUserCircle className="fs-5 me-3" />
                    {window.localStorage.getItem("customer_username") &&
                      window.localStorage.getItem("customer_username")}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="ourProductDropdown"
                  >
                    <Link to='profile' className="dropdown-item p-3" href="#ourProduct">
                      Profile
                    </Link>
                    <Link to='tiket-saya' className="dropdown-item p-3" href="#ourProduct">
                      Tiket Saya
                    </Link>
                    <Link to='pesanan-saya' className="dropdown-item p-3" href="#ourProduct">
                      Pesanan Saya
                    </Link>
                    <div
                      onClick={handleLogout}
                      className="dropdown-item p-3"
                    >
                      Logout
                    </div>
                  </div>
                </li>
                <li className="nav-item me-3">
                <Link
                  className="nav-link fw-bold fs-6"
                  to="/cart-shop"
                >
                  <FaCartArrowDown  className="fs-4 ms-lg-3 text-primary"/>
                </Link>
              </li>
              </ul>
            ) : (
              <>
                <ul className="navbar-nav ms-auto me-4">
                  <li className="nav-item ">
                    <Link
                      to="user-login"
                      className="btn btn-success py-2 px-5 nav-link fw-bold text-light "
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
