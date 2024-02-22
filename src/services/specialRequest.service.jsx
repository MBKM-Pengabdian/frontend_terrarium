import axios from "axios";

const SpecialRequestService = () => {
  const handleGetSpecialRequest = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/special-request/get`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const result = response.data;
      return result;
    } catch (error) {
      console.error("Error fetching Special Request:", error);
      throw error;
    }
  };

  // const handleGetDetailProduct = async (id) => {
  //   try {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/api/product/get/${id}`,
  //     );

  //     const products = response.data;

  //     return products;
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     throw error;
  //   }
  // };

  const handleAddRequest = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/special-request/store`,
        data,
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        //   },
        // }
      );
      const addedSpecialRequest = response.data;
      return addedSpecialRequest;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  return { handleAddRequest, handleGetSpecialRequest};
};

export default SpecialRequestService;
