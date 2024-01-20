import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CardEvent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-6 col-lg-6">
        <div className="card shadow-sm mx-4 mb-5 rounded-3">
          <div className="row">
            <div className="col-lg-5" style={{ height: "380px" }}>
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
            </div>
            <div className="col-lg-6 d-flex flex-column">
              {data.detail_event.map((data2, index) => (
                <div key={index} className="card-body pt-2">
                  <label className="fs-6 text-primary">{data2.tag_event}</label>
                  <div className="card-title h5 mb-3 text-3line">
                    {data.title_event}
                  </div>
                  <div className="time-event mb-2">
                    <FaClock className="text-primary me-3" /> {data2.date_event.split(' ')[1]} - Selesai
                  </div>
                  <div className="date-event mb-2">
                    <FaCalendar className="text-primary me-3" /> {data2.date_event.split(' ')[0]}
                  </div>
                  <div className="time-event mb-3 text-2line">
                    <FaMapMarkerAlt className="text-primary me-3" /> {data.place}
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
                  <div className="col fw-bold ">
                    Sisa {data2.sisa_event} Kuota
                  </div>
                  <div className="col-3 text-end fw-bold  ">{data.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
