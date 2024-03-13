import { useState } from "react";
import { Toast, getCurrentDate } from "../../../../../utils/GlobalFunction";
import { Footer } from "../../../components/footer/Footer";
import { Navbar } from "../../../components/navbar/Navbar";
import { Sidebar } from "../../../components/sidebar/Sidebar";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EventService from "../../../../../services/event.service";
import { Link } from "react-router-dom";

export const EventDetailDashboard = () => {
  const eventService = EventService();
  const initialFormData = {
    title_event: "",
    time_e: "",
    date_e: "",
    date_event: "",
    last_regist_event: "",
    price_event: 0,
    kuota_event: 0,
    speaker_event: "",
    sponsor_event: "",
    contact_person: "",
    place: "",
    tag_event: "",
    description_event: "",
    img_event: null,
    banner_image: null,
    user_id: localStorage.getItem("user_id"),
  };
  const [formData, setFormData] = useState(initialFormData);
  const resetForm = () => {
    setFormData(initialFormData);
  };

  const [errors, setErrors] = useState({});

  const [timelines, setTimelines] = useState([
    { id: 1, title_timeline: "", time: "" },
  ]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
    console.log(formData);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleAddTimeline = () => {
    setTimelines([
      ...timelines,
      { id: timelines.length + 1, title_timeline: "", time: "" },
    ]);
  };

  const handleRemoveTimeline = (index) => {
    const updatedTimelines = timelines.filter((_, i) => i !== index);
    setTimelines(updatedTimelines);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple required field validation
    const requiredFields = [
      "title_event",
      "date_e",
      "time_e",
      "price_event",
      "place",
    ];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace("_", " ")} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const dateTime = `${formData.date_e} ${formData.time_e}`;
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "date_event") {
        payload.append("date_event", dateTime);
      } else {
        payload.append(key, value);
      }
    });

    try {
      console.log(formData);
      const addedEvent = await eventService.handleAddEvent(payload);
      if (addedEvent.status === 201) {
        Toast.fire({
          icon: "success",
          title: "Event berhasil ditambah",
        });
        resetForm();
      }
      return addedEvent;
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: `${error}`,
      });
      console.error("Error adding event:", error);
    }
  };
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">
          <nav aria-label="breadcrumb mb-3">
            <ol className="breadcrumb py-4">
              <li className="breadcrumb-item">
                <Link to="">Dashboard</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/product">Event</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                name event
              </li>
            </ol>
          </nav>
          <div className="card">
            <div className="card-body">
              <form role="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-7 mb-3">
                    <label>Judul Event *</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.title_event ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Judul Event"
                      value={formData.title_event}
                      onChange={handleChange}
                      name="title_event"
                    />
                    {errors.title_event && (
                      <div className="invalid-feedback">
                        {errors.title_event}
                      </div>
                    )}
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Date Event *</label>
                    <input
                      type="date"
                      min={getCurrentDate()}
                      className={`form-control ${
                        errors.date_e ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Stok Product"
                      onChange={handleChange}
                      value={formData.date_e}
                      name="date_e"
                    />
                    {errors.date_e && (
                      <div className="invalid-feedback">{errors.date_e}</div>
                    )}
                  </div>
                  <div className="col-md-2 mb-3">
                    <label>Time Event *</label>
                    <input
                      type="time"
                      className={`form-control ${
                        errors.time_e ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Stok Product"
                      onChange={handleChange}
                      value={formData.time_e}
                      name="time_e"
                    />
                    {errors.time_e && (
                      <div className="invalid-feedback">{errors.time_e}</div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-7 mb-3">
                    <label>Batas Pendaftaran</label>
                    <input
                      type="date"
                      min={getCurrentDate()}
                      max={formData.date_e}
                      className={`form-control`}
                      placeholder="Batas Pendaftaran"
                      onChange={handleChange}
                      value={formData.last_regist_event}
                      name="last_regist_event"
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Harga *</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.price_event ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Harga"
                      onChange={handleChange}
                      value={formData.price_event}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      name="price_event"
                    />
                    {errors.price_event && (
                      <div className="invalid-feedback">
                        {errors.price_event}
                      </div>
                    )}
                  </div>
                  <div className="col-md-2 mb-3">
                    <label>Kuota Event</label>
                    <input
                      type="text"
                      className={`form-control`}
                      placeholder="Masukan Kuota Event"
                      onChange={handleChange}
                      value={formData.kuota_event}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      name="kuota_event"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label>Speaker</label>
                    <input
                      type="text"
                      className={`form-control`}
                      placeholder="Masukan Pembicara"
                      onChange={handleChange}
                      value={formData.speaker_event}
                      name="speaker_event"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Sponsor</label>
                    <input
                      type="text"
                      className={`form-control`}
                      placeholder="Masukan Sponsor"
                      onChange={handleChange}
                      value={formData.sponsor_event}
                      name="sponsor_event"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label>Contact Person Event</label>
                    <input
                      type="text"
                      className={`form-control`}
                      placeholder="Masukan Contact Person"
                      onChange={handleChange}
                      value={formData.contact_person}
                      name="contact_person"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Lokasi Event *</label>
                    <textarea
                      type="text"
                      className={`form-control ${
                        errors.place ? "is-invalid" : ""
                      }`}
                      placeholder="Masukan Lokasi Event"
                      onChange={handleChange}
                      value={formData.place}
                      name="place"
                    ></textarea>
                    {errors.place && (
                      <div className="invalid-feedback">{errors.place}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Tag Event</label>
                    <textarea
                      type="text"
                      className={`form-control`}
                      placeholder="Masukan Tag Event (pisah dengan koma)"
                      onChange={handleChange}
                      value={formData.tag_event}
                      name="tag_event"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="fs-6 me-4">Time Line Acara</label>
                  </div>
                  {timelines.map((timeline, index) => (
                    <div key={timeline.id} className="row mb-3">
                      <div className="col-auto">
                        <label className="fs-6 me-4">&nbsp;</label>
                        <div>
                          <button
                            type="button"
                            onClick={handleAddTimeline}
                            className="btn btn-success py-2 px-3 me-2"
                          >
                            <FaPlus />
                          </button>
                          {timelines.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveTimeline(index)}
                              className="btn btn-danger py-2 px-3"
                            >
                              <FaMinus />
                            </button>
                          )}
                        </div>
                      </div>
                      <div className="col mb-3">
                        <label>Title Acara</label>
                        <input
                          type="text"
                          className={`form-control`}
                          placeholder="Masukan Stok Product"
                          onChange={handleChange}
                          name={`timeline[${index}][title]`}
                        />
                      </div>
                      <div className="col-md-2 mb-3">
                        <label>Time</label>
                        <input
                          type="Time"
                          className={`form-control`}
                          placeholder="Masukan Stok Product"
                          onChange={handleChange}
                          name={`timeline[${index}][waktu]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label>Descripsi Event</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p></p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        handleChange({
                          target: {
                            name: "description_event",
                            value: data,
                            type: "text",
                          },
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label>Gambar</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Masukan Gambar Event"
                      onChange={handleChange}
                      name="img_event"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label>Banner</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Masukan Gambar Product"
                      onChange={handleChange}
                      name="banner_event"
                    />
                  </div>
                </div>

                <div className="modal-footer justify-content-between align-items-center p-3">
                  <button
                    type="button"
                    className="btn btn-light m-0"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-success m-0">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
