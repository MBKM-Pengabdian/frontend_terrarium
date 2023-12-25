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
            localStorage.setItem('accessToken', data.data.accessToken);
            navigate('/dashboard');
         }
      } catch (error) {
         console.error('Error during login:', error);
      }
   };

   return { handleLogin };
};

export default AuthService;