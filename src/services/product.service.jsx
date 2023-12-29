import axios from 'axios';

const ProductService = () => {

   const handleGetAllProduct = async () => {
      try {

         const response = await axios.get(`${import.meta.env.VITE_API_URL}api/product/get`);

         const products = response.data;

         return products;
      } catch (error) {
         console.error('Error fetching products:', error);
         throw error;
      }
   };

   const handleAddProduct = async (productData) => {
      try {
         const response = await axios.post(
            `${import.meta.env.VITE_API_URL}api/product/store`,
            productData,
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('accessToken')}`
               }
            }
         );

         const addedProduct = response.data;
         return addedProduct;
      } catch (error) {
         console.error('Error adding product:', error);
         throw error;
      }
   }

   const handleDeleteProduct = async (productId) => {
      try {
         const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}api/product/delete/${productId}`,
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
               },
            }
         );

         // Assuming your API returns some response data after deletion
         const deletedProduct = response.data;
         return deletedProduct;
      } catch (error) {
         console.error('Error deleting product:', error);
         throw error;
      }
   };

   return { handleGetAllProduct, handleAddProduct, handleDeleteProduct };
};

export default ProductService