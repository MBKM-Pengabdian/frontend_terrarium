import axios from "axios";

const EventService = () => {
  const handleGetAllEvent = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/event/get`
      );

      const events = response.data;

      return events;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  const handleGetDetailEvent = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/event/get/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  const handleAddEvent = async (eventData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/event/store`,
        eventData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const addedEvent = response.data;
      return addedEvent;
    } catch (error) {
      console.error("Error adding event:", error);
      throw error;
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/event/delete/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Assuming your API returns some response data after deletion
      const deletedEvent = response.data;
      return deletedEvent;
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    }
  };

  const handleRegisterEvent = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/event/register-event/store`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken_customer")}`,
          },
        }
      );

      const addedEvent = response.data;
      return addedEvent;
    } catch (error) {
      console.error("Error adding event:", error);
      throw error;
    }
  };

  const handleGetTicketEvent = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/event/register-event/get`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken_customer")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  return {
    handleGetAllEvent,
    handleAddEvent,
    handleDeleteEvent,
    handleGetDetailEvent,
    handleRegisterEvent,
    handleGetTicketEvent,
  };
};

export default EventService;
