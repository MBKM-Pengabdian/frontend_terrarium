import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export const CardEvent = ({ data }) => {
  return (
    <>
      <div className="col-md-6 col-lg-6">
        <div className="card shadow-sm mx-4 mb-5 rounded-3">
          <div className="row">
            <div className="col-lg-5" style={{ height: "380px" }}>
              <img
                src="https://images.unsplash.com/photo-1682685797857-97de838c192e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
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
                <div className="card-title h5 mb-3 text-3line">{data.title_event}</div>
                <div className="time-event mb-2">
                  <FaClock className="text-primary me-3" /> 09:40
                </div>
                <div className="date-event mb-2">
                  <FaCalendar className="text-primary me-3" /> 18 Desember 2023
                </div>
                <div className="time-event mb-3">
                  <FaMapMarkerAlt className="text-primary me-3" /> Zoom
                </div>
                <button className="btn border border-primary w-75 ">
                  Detail
                </button>
              </div>
              
              {data.detail_event.map((data2, index) => (
                <div className="row mt-auto m-2" key={index}>
                  <div className="col">
                    Sisa {data2.sisa_event} Kuota
                  </div>
                  <div className="col text-end">{data.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
