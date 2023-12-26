import AuthService from "../../../services/auth.service";

export const Logout = () => {
   const authService = AuthService();

   const handleLogout = () => {
      authService.handleLogout();
   };

   return (
      <>
         <a className="btn btn-white m-0 shadow-sm" onClick={handleLogout}>
            <i className="fas fa-solid fa-arrow-right-from-bracket me-1"></i>
            <span className="d-sm-inline d-none">Log Out</span>
         </a>
      </>
   )
}