import { useEffect, useState } from "react";
import { CardEvent } from "./components/CardEvent";
import axios from "axios";
export const Event = () => {
  const [listEventData, setListEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}api/event/get`
        );
        setListEventData(response.data.data);
        console.log(response.data.data);
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
          background:
            'url("https://cdn.discordapp.com/attachments/1174741902415900742/1192021363226066995/Group_1_1.png?ex=65a78f67&is=65951a67&hm=9c775bc530131c19b9b3f664dd2d51330c4d99b6a77c9e046c1467f00dbd1faf&")',
        }}
      >
        <div className="container py-5">
          <div className="text-white mb-3 h1 text-center">Event</div>
          <div className="text-white mb-3 h4 text-center">Event-event Cacti Life (CL)</div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {listEventData &&
            listEventData.map((data, index) => (
              <CardEvent key={index} data={data} />
            ))}
        </div>
      </div>
    </>
  );
};
