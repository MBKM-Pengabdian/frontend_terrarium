import { useState } from 'react';
import AuthService from '../../../services/auth.service';

export const Register = () => {
   const authService = AuthService();
   const [formData, setFormData] = useState({
      role: 'admin',
      username: '',
      email: '',
      password: '',
      phone: '',
      address: '',
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      authService.handleRegister(formData);
   };

   return (
      <>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-md-6">
                  <div className="card mt-8">
                     <div className="card-header pb-0 text-left bg-transparent text-center">
                        <h3 className="font-weight-bolder text-success text-gradient">Register</h3>
                        <p className="mb-0">Lengkapi semua form nya</p>
                     </div>
                     <div className="card-body">
                        <form role="form" onSubmit={handleSubmit}>
                           <div className="row">
                              <div className="col-md-6 mb-3">
                                 <label>Username</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukan Username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                 />
                              </div>
                              <div className="col-md-6 mb-3">
                                 <label>Email</label>
                                 <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Masukan Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>

                           <div className="row">
                              <div className="col-md-6 mb-3">
                                 <label>Phone</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukan Nomor Telepon"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                 />
                              </div>
                              <div className="col-md-6 mb-3">
                                 <label>Address</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Masukan Alamat"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                 />
                              </div>
                           </div>
                           <label>Password</label>
                           <div className="mb-3">
                              <input
                                 type="password"
                                 className="form-control"
                                 placeholder="Masukan Password"
                                 name="password"
                                 value={formData.password}
                                 onChange={handleChange}
                              />
                           </div>
                           <div className="text-center">
                              <button type="submit" className="btn bg-gradient-success w-100 mt-4 mb-0">
                                 Register
                              </button>
                           </div>
                        </form>
                     </div>
                     <div className="card-footer text-center pt-0 px-lg-2 px-1">
                        <p className="mb-4 text-sm mx-auto">
                           Sudah punya akun?
                           <a className="text-success text-gradient font-weight-bold" href="/login"> Sign in</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
