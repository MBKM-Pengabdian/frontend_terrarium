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
            const response = await axios.get(`${import.meta.env.VITE_API_URL}api/event/get`);
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
      <div className="container">
      <h1 className="mb-5">Event</h1>
        <div className="row d-flex justify-content-center">
         {
            listEventData && listEventData.map((data,index)=>(
               <CardEvent key={index} data={data} />
            ))
         }
        </div>
      </div>
    </>
  );
};
