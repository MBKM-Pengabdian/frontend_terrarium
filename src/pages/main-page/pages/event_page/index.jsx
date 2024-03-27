import { useEffect, useState } from "react";
import { CardEvent } from "./components/CardEvent";
import EventService from "../../../../services/event.service";
import img_banner1 from "./../../../../assets/img/banner-1.jpg";

export const Event = () => {
  const eventService = EventService();
  const [listEventData, setListEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await eventService.handleGetAllEvent();
        if (response.status === 200) {
          setListEventData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div
        className="container-fluid py-5 mb-5"
        style={{
          background: `url(${img_banner1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          <div className="text-white h1 text-center">Event</div>
          <div className="text-white mb-3 h4 text-center">
            Event-event Cacti Life
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 d-flex justify-content-center">
          {listEventData &&
            listEventData.map((data, index) => (
              <CardEvent key={index} data={data} />
            ))}
        </div>
      </div>
    </>
  );
};
