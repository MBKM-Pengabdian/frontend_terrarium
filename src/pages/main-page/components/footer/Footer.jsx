import { useEffect, useState } from "react";
import Logo from "./../../../../assets/img/logo.png";
import EventService from "../../../../services/event.service";
import { Link } from "react-router-dom";

export const Footer = () => {
  const eventService = EventService();
  const [listEventData, setListEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
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

  return (
    <>
      <div className="container-fluid p-0 bg-white">
        <div className="container-fluid">
          <footer className="row p-5 mt-5 border-top">
            <div className="col-lg-4 col-md-3 mb-3 bg-da">
              <div className="mb-4 h5">About Cacti Life</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio cum explicabo nemo obcaecati ut sit neque iure,
                perferendis eos rem amet quidem! Ea enim neque obcaecati
                explicabo ducimus. Iusto, nobis.
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>08887599774
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>example@gmail.com
              </p>
            </div>
            <div className="col-lg-3 col-md-3 mb-2">
              <div className="mb-4 h5">Event Terbaru</div>
              {listEventData &&
                listEventData.slice(0, 2).map((data, index) => (
                  <div className="mb-3 " key={index}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Link to={`/detail-event/${data.uuid}`}>
                          <img
                            src={import.meta.env.VITE_API_URL + data.img_event}
                            className="img-fluid rounded-start"
                            style={{ width: "80px" }}
                            alt={data.title_event}
                          />
                        </Link>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body pt-1">
                          <h5 className="card-title fs-6">
                            <Link to={`/detail-event/${data.uuid}`}>
                              {data.title_event}
                            </Link>
                          </h5>

                          <p className="card-text">
                            <small className="text-body-secondary">
                              {data.detail_event[0].date_event.split(" ")[0]}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-lg-5 col-md-3 mb-2">
              <div className="mb-4 h5">Alamat Kami</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15927.999242876513!2d98.6907458!3d3.5875173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b05672220d%3A0xba277a5eddb19abe!2sUniversitas%20Mikroskil%2C%20Kampus%20B!5e0!3m2!1sid!2sid!4v1708591527354!5m2!1sid!2sid"
                width="600"
                height="200"
                className="border-0 img-fluid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
