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

  const handleGetSpecialRequestUser = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/special-request/${id}/get`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken_customer"
            )}`,
          },
        }
      );

      const specialReq = response.data;

      return specialReq;
    } catch (error) {
      console.error("Error fetching specialReq:", error);
      throw error;
    }
  };

  const handleAddRequest = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/special-request/store`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken_customer"
            )}`,
          },
        }
      );
      const addedSpecialRequest = response.data;
      return addedSpecialRequest;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };
  const handleUpdateStatusSpecialReq = async (data) => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/special-request/updateStatus/${data.idSpecialReq}`,data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      );
      const resSpecialReq = response.data;
      return resSpecialReq;
    } catch (error) {
      console.error("Error update special request:", error);
      throw error;
    }
  };

  const handleGetDetailSpecialReq = async (data) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/special-request/get/${data}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      );
      const SpecialRequest = response.data;
      return SpecialRequest;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  return {
    handleAddRequest,
    handleGetSpecialRequest,
    handleGetSpecialRequestUser,
    handleGetDetailSpecialReq,
    handleUpdateStatusSpecialReq,
  };
};

export default SpecialRequestService;
