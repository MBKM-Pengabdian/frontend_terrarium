import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './../../../services/auth.service';

export const Login = () => {
   const { handleLogin } = AuthService();
   const navigate = useNavigate()
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   useEffect(() => {
      const isAuthenticated = localStorage.getItem('accessToken');

      if (isAuthenticated) {
         navigate('/dashboard');
      }
      else {
         navigate('/login');
      }
   }, [navigate]);

   const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin(username, password);
   };
   return (
      <>
         <main className="main-content mt-0">
            <section>
               <div className="page-header min-vh-75">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="card mt-8 w-50">
                           <div className="card-header pb-0 text-left bg-transparent text-center">
                              <h3 className="font-weight-bolder text-success text-gradient">Welcome</h3>
                              <p className="mb-0">Masukan Email dan Password</p>
                           </div>
                           <div className="card-body">
                              <form role="form" onSubmit={handleSubmit}>
                                 <label>Email</label>
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Enter Username"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                    />
                                 </div>
                                 <label>Password</label>
                                 <div className="mb-3">
                                    <input
                                       type="password"
                                       className="form-control"
                                       placeholder="Enter Password"
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}
                                    />
                                 </div>
                                 <div className="text-center">
                                    <button type="submit" className="btn bg-gradient-success w-100 mt-4 mb-0">
                                       Login
                                    </button>
                                 </div>
                              </form>
                           </div>
                           <div className="card-footer text-center pt-0 px-lg-2 px-1">
                              <p className="mb-4 text-sm mx-auto">
                                 Dont have an account?
                                 <a className="text-info text-gradient font-weight-bold">Sign up</a>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section >
         </main >
      </>
   );
};
