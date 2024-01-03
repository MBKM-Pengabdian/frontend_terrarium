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
                src="https://cdn.discordapp.com/attachments/1174741902415900742/1191807387003261019/image.png?ex=65a6c81f&is=6594531f&hm=30644f92bb2a186059e110824657f3e13ca12c7d627158fd618a1e873d4adfeb&"
                alt=".."
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-lg-6 d-flex flex-column">
              <div className="card-body pt-2">
                {data.detail_event.map((data2, index) => (
                  <label className="fs-6 text-primary" key={index}>
                    {data2.tag_event}
                  </label>
                ))}
                <div className="card-title h5 mb-3 text-3line">
                  {data.title_event}
                </div>
                <div className="time-event mb-2">
                  <FaClock className="text-primary me-3" /> 09:40
                </div>
                <div className="date-event mb-2">
                  <FaCalendar className="text-primary me-3" /> 18 Desember 2023
                </div>
                <div className="time-event mb-3">
                  <FaMapMarkerAlt className="text-primary me-3" /> Zoom
                </div>
                <button
                  onClick={() => navigate(`/detail-event/${data.uuid}`)}
                  className="btn border border-primary w-75 "
                >
                  Detail
                </button>
              </div>

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
