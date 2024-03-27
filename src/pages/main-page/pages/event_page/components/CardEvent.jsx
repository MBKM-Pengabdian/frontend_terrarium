/* eslint-disable react/prop-types */
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaTags,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { convertTime, formatRupiah } from "../../../../../utils/GlobalFunction";

export const CardEvent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-6 col-md-6 col-lg-6 col-sm-6">
        <div className="card shadow-sm rounded-3">
          <div className="row">
            <div className="col-lg-5" style={{ height: "370px" }}>
              <Link to={`/detail-event/${data.uuid}`}>
                <img
                  src={import.meta.env.VITE_API_URL + data.img_event}
                  alt=".."
                  className="img-fluid rounded-start"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
            <div className="col-lg-6 d-flex flex-column">
              {data.detail_event.map((data2, index) => (
                <div key={index} className="card-body pt-2">
                  <label className="text-primary text-break">
                    {data2.tag_event}
                  </label>
                  <div className="card-title h5 mb-3 text-2line">
                    <Link to={`/detail-event/${data.uuid}`}>
                      {data.title_event}
                    </Link>
                  </div>
                  <div
                    className="time-event mb-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <FaTags className="text-primary me-3" />{" "}
                    <span className="text-danger fw-bold" style={{ fontSize: "1rem" }}>
                      {data.price_event == "0" ? 'Free' : formatRupiah(data.price_event)}
                    </span>
                  </div>
                  <div
                    className="time-event mb-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <FaClock className="text-primary me-3" />{" "}
                    {convertTime(data2.date_event)} - Selesai
                  </div>
                  <div
                    className="date-event mb-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <FaCalendar className="text-primary me-3" />{" "}
                    {data2.date_event.split(" ")[0]}
                  </div>
                  <div
                    className="time-event mb-3 text-2line"
                    style={{ fontSize: "0.9rem" }}
                  >
                    <FaMapMarkerAlt className="text-primary me-3" />{" "}
                    {data.place}
                  </div>
                  <button
                    onClick={() => navigate(`/detail-event/${data.uuid}`)}
                    className="btn border border-primary w-75 "
                  >
                    Detail
                  </button>
                </div>
              ))}

              {data.detail_event.map((data2, index) => (
                <div className="row mt-auto my-2" key={index}>
                  <div className="col-auto fw-bold ms-2">
                    Sisa {data2.kuota_event} Kuota
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
