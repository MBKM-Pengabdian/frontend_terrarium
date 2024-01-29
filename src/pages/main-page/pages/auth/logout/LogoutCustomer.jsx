import AuthService from "../../../../../services/auth.service";

export const LogoutCustomer = () => {
  const authService = AuthService();

  const handleLogout = () => {
    authService.handleLogoutCustomer();
  };

  return (
    <>
      <div onClick={handleLogout} className="bg-dark m-0 p-0">
        Logout
      </div>
    </>
  );
};
