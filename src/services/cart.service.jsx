import axios from "axios";

const CartService = () => {
  const handleGetShoppingCart = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/cart/get/${localStorage.getItem(
          "customer_id"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken_customer"
            )}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  const handleDeleteShoppingCart = async (id) => {
    try {
      const response = await axios.delete(
         `${import.meta.env.VITE_API_URL}/api/cart/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken_customer"
            )}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  const handleNewShoppingCart = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/cart/store`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken_customer"
            )}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };
  return { handleGetShoppingCart, handleNewShoppingCart,handleDeleteShoppingCart };
};
export default CartService;
