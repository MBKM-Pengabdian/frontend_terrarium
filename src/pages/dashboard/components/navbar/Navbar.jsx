
import { Logout } from "../../../auth/logout/Logout"

export const Navbar = () => {
   return (
      <>
         <nav className="navbar navbar-main navbar-expand-lg bg-white border-bottom " id="navbarBlur">
            <div className="container-fluid py-1 px-3">
               <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                     <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark">Pages</a></li>
                     <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                  </ol>
                  <h6 className="fw-semibold mb-0">Dashboard</h6>
               </nav>
               <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                  <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                     <li className="nav-item d-flex align-items-center">
                        <Logout />
                     </li>
                  </div>
                  <ul className="navbar-nav  justify-content-end">
                     <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                        <a className="nav-link text-body p-0" id="iconNavbarSidenav">
                           <div className="sidenav-toggler-inner">
                              <i className="sidenav-toggler-line"></i>
                              <i className="sidenav-toggler-line"></i>
                              <i className="sidenav-toggler-line"></i>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   )
}