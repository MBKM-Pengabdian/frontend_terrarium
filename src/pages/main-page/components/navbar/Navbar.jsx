import { Link, useLocation } from "react-router-dom";
import Logo from "./../../../../assets/img/logo.png";
import { FaUser, FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  const location = useLocation();

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
              <li className="nav-item me-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/product" ? "active" : ""
                  }`}
                  to="/product"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/event" ? "active" : ""
                  }`}
                  to="/event"
                >
                  Event
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="ourProductDropdown"
                  data-bs-toggle="dropdown"
                >
                  <FaUserCircle className="fs-5 me-2"/>
                  Putra
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="ourProductDropdown"
                >
                  <a className="dropdown-item p-3" href="#ourProduct">
                    Tiket Saya
                  </a>
                  <a className="dropdown-item p-3" href="#ourProduct">
                    Pesanan Saya
                  </a>
                  <a className="dropdown-item p-3" href="#ourProduct">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
