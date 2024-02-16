import parse from "html-react-parser";
import { useEffect, useState } from "react";
import {
  FaCalendar,
  FaClock,
  FaCopy,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegCopy,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import EventService from "../../../../services/event.service";
import { ModalForm } from "./components/modalForm/modalForm";
import { Toast } from "../../../../utils/GlobalFunction";

export const DetailEvent = () => {
  const { id } = useParams();
  const eventService = EventService();
  const [activeTab, setActiveTab] = useState("timeline");
  const [detailEvent, setdetailEvent] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleShareEvent = (type) => {
    const currentUrl = window.location.href;

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      instagram: `https://www.instagram.com/?url=${encodeURIComponent(
        currentUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentUrl
      )}`,
    };

    if (type in shareUrls) {
      window.open(shareUrls[type], "_blank");
    } else if (type === "copy-link") {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: `Link berhasil dicopy`,
          });
        })
        .catch((error) => {
          console.error("Gagal menyalin URL ke clipboard:", error);
        });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await eventService.handleGetDetailEvent(id);
        if (response.status === 200) {
          setdetailEvent(response.data);
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
      <div className="banner-event">
        <img
          src="https://images.unsplash.com/photo-1703885875760-6dc84574c37c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D"
          alt=""
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3" style={{ minWidth: "250px" }}>
            <div className="img-event" style={{ marginTop: "-90px" }}>
              <img
                src={import.meta.env.VITE_API_URL + detailEvent.img_event}
                className="img-fluid"
                style={{ width: "100%", height: "370px", objectFit: "cover" }}
                alt=""
              />
            </div>
          </div>
          <div
            className="col-lg-6 pt-3 d-flex flex-column"
            style={{ minWidth: "200px" }}
          >
            <div className="text-dark fw-medium fs-6"></div>
            <h3 className="title-event text-primary fs-4">
              {detailEvent && detailEvent.title_event}
            </h3>
            <div className="fw-bold mb-3">
              Share:
              <span>
                <FaFacebook
                  role="button"
                  className="fs-5 mx-1"
                  onClick={() => handleShareEvent("facebook")}
                />
              </span>
              <span>
                <FaInstagram
                  role="button"
                  className="fs-5 mx-1"
                  onClick={() => handleShareEvent("instagram")}
                />
              </span>
              <span>
                <FaTwitter
                  role="button"
                  className="fs-5 mx-1"
                  onClick={() => handleShareEvent("twitter")}
                />
              </span>
              <span>
                <FaRegCopy
                  role="button"
                  className="fs-5 mx-1"
                  onClick={() => handleShareEvent("copy-link")}
                />
              </span>
            </div>
            <div className="mb-2 text-dark">
              <div className="mb-2">
                <FaClock className="text-primary me-2" />{" "}
                {detailEvent.detail_event[0].date_event.split(" ")[1]}
                <FaCalendar className="text-primary ms-4 me-2" />{" "}
                {detailEvent.detail_event[0].date_event.split(" ")[0]}
              </div>
              <div className="mb-2">
                <FaMapMarkerAlt className="text-primary me-2" /> {detailEvent && detailEvent.place}
              </div>
            </div>
            <div className="mt-auto mb-3">
              <ModalForm title="Isi data anda" />
            </div>
          </div>
          <div className="col m-auto text-center" style={{ minWidth: "200px" }}>
            <div>Terbuka Hingga:</div>
            <div className="fw-bold mb-3">
              {detailEvent &&
                detailEvent.detail_event[0].last_regist_event.split(" ")[0]}
            </div>
            <div>Sisa Kuota:</div>
            <div className="fw-bold">
              {detailEvent && detailEvent.detail_event[0].kuota_event}
            </div>
          </div>
        </div>

        <hr />
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "timeline" ? "active" : ""
                }`}
                href="#timeline"
                onClick={() => handleTabClick("timeline")}
              >
                Timeline
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "speaker" ? "active" : ""
                }`}
                href="#speaker"
                onClick={() => handleTabClick("speaker")}
              >
                Speaker
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "sponsor" ? "active" : ""
                }`}
                href="#sponsor"
                onClick={() => handleTabClick("sponsor")}
              >
                Sponsor
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "details" ? "active" : ""
                }`}
                href="#details"
                onClick={() => handleTabClick("details")}
              >
                Details
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-body-tertiary p-3 rounded-2"
          tabIndex="0"
        >
          <h4 id="timeline">Timeline</h4>
          {detailEvent &&
            detailEvent.detail_event[0].timeline
              .sort((a, b) => {
                const [hoursA, minutesA] = a.waktu.split(":").map(Number);
                const [hoursB, minutesB] = b.waktu.split(":").map(Number);
                // Bandingkan jam dan menit
                if (hoursA !== hoursB) {
                  return hoursA - hoursB; // Urutkan berdasarkan jam secara ascending
                } else {
                  return minutesA - minutesB; // Jika jam sama, urutkan berdasarkan menit secara ascending
                }
              })
              .map((resTimeline, index) => (
                <div className="row mb-4" key={index}>
                  <div className="col-1" style={{ width: "80px" }}>
                    <div className="circle-timeline p-auto d-flex align-items-center justify-content-center text-danger fw-bold border border-danger">
                      {resTimeline.waktu}
                    </div>
                  </div>
                  <div className="col m-auto">
                    <h6 className="text-danger">{resTimeline.title}</h6>
                    <label htmlFor="">{resTimeline.waktu}</label>
                  </div>
                </div>
              ))}

          <h4 id="speaker">Speaker</h4>
          <div className="speaker-event mb-5">
            <p>{detailEvent && detailEvent.detail_event[0].speaker_event}</p>
          </div>

          <h4 id="sponsor">Sponsor</h4>
          <div className="sponsor-event mb-5">
            <p>{detailEvent && detailEvent.detail_event[0].sponsor_event}</p>
          </div>

          <h4 id="details">Details</h4>
          <div className="details-event mb-5">
            <p>
              {detailEvent &&
                parse(detailEvent.detail_event[0].description_event)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
