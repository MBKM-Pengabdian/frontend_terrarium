import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthService = () => {
   const navigate = useNavigate();

   const handleLogin = async (username, password) => {
      try {
         const response = await axios.post(`${import.meta.env.VITE_API_URL}api/auth/user/login`, {
            username,
            password,
         });

         const data = response.data;

         if (data.message === 'SUCCESS') {
            console.log(data.data);
            localStorage.setItem('accessToken', data.data.access_token);
            localStorage.setItem('user_id', data.data.userId);
            navigate('/dashboard');
         }
      } catch (error) {
         console.error('Error during login:', error);
      }
   };

   const handleRegister = async (userData) => {
      try {
         const response = await axios.put(`${import.meta.env.VITE_API_URL}api/auth/user/register`, userData);

         const data = response.data;

         if (data.message === 'SUCCESS') {
            // Registration successful, you may want to handle this accordingly
            navigate('/login');
         } else {
            // Registration failed, handle errors
            console.error('Registration failed:', data.message);
         }
      } catch (error) {
         console.error('Error during registration:', error);
      }
   };

   const handleLogout = () => {
      localStorage.removeItem('accessToken');
      navigate('/login');
   };

   return { handleLogin, handleRegister, handleLogout };
};

export default AuthService;