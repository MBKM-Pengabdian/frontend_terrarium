import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaMinus, FaPlus } from "react-icons/fa";
import EventService from "../../../../../../services/event.service";

export const FormEvent = () => {
  const eventService = EventService();
  const [formData, setFormData] = useState({
    title_event: "",
    date_event: "",
    last_regist_event: "",
    price_event: "",
    kuota_event: "",
    speaker_event: "",
    sponsor_event: "",
    place: "",
    tag_event: "",
    description_event: "",
    event_image: null,
    banner_image: null,
    user_id: localStorage.getItem("user_id"),
  });
  const [errors, setErrors] = useState({});

  const [timelines, setTimelines] = useState([
    { id: 1, title_timeline: "", time: "" },
  ]);

  const handleChangeTimeLines = (event, index, fieldName) => {
    const updatedTimelines = [...timelines];
    updatedTimelines[index][fieldName] = event.target.value;
    setTimelines(updatedTimelines);
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

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "file" ? event.target.files[0] : value,
    }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple required field validation
    const requiredFields = [
      "title_event",
      "date_event",
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

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const addedEvent = await eventService.handleAddEvent(payload);
      return addedEvent;
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <>
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
              onChange={handleChange}
              name="title_event"
            />
            {errors.title_event && (
              <div className="invalid-feedback">{errors.title_event}</div>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label>Date Event *</label>
            <input
              type="date"
              className={`form-control ${
                errors.date_event ? "is-invalid" : ""
              }`}
              placeholder="Masukan Stok Product"
              onChange={handleChange}
              name="date_event"
            />
            {errors.date_event && (
              <div className="invalid-feedback">{errors.date_event}</div>
            )}
          </div>
          <div className="col-md-2 mb-3">
            <label>Time Event *</label>
            <input
              type="time"
              className={`form-control ${
                errors.date_event ? "is-invalid" : ""
              }`}
              placeholder="Masukan Stok Product"
              onChange={handleChange}
              name="date_event"
            />
            {errors.date_event && (
              <div className="invalid-feedback">{errors.date_event}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 mb-3">
            <label>Batas Pendaftaran</label>
            <input
              type="date"
              className={`form-control`}
              placeholder="Batas Pendaftaran"
              onChange={handleChange}
              name="stock_quantity"
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
              name="price_event"
            />
            {errors.price_event && (
              <div className="invalid-feedback">{errors.price_event}</div>
            )}
          </div>
          <div className="col-md-2 mb-3">
            <label>Kuota Event</label>
            <input
              type="number"
              className={`form-control`}
              placeholder="Masukan Kuota Event"
              onChange={handleChange}
              name="kuota_event"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Speaker</label>
            <input
              type="text"
              className={`form-control`}
              placeholder="Masukan Pembicara"
              onChange={handleChange}
              name="speaker_event"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label>Sponsor</label>
            <input
              type="text"
              className={`form-control`}
              placeholder="Masukan Sponsor"
              onChange={handleChange}
              name="sponsor_event"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Lokasi Event *</label>
            <textarea
              type="text"
              className={`form-control ${errors.place ? "is-invalid" : ""}`}
              placeholder="Masukan Lokasi Event"
              onChange={handleChange}
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
                  onChange={(e) => handleChangeTimeLines(e, index)}
                  name={`title_${timeline.id}`}
                />
              </div>
              <div className="col-md-2 mb-3">
                <label>Time</label>
                <input
                  type="Time"
                  className={`form-control`}
                  placeholder="Masukan Stok Product"
                  onChange={(e) => handleChange(e, index)}
                  name={`time_${timeline.id}`}
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
              data="<p>Hello from CKEditor&nbsp;5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event) => {
                console.log(event);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
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
              placeholder="Masukan Gambar Product"
              onChange={handleChange}
              name="product_image"
            />
          </div>
          <div className="col-md-12 mb-3">
            <label>Banner</label>
            <input
              type="file"
              className="form-control"
              placeholder="Masukan Gambar Product"
              onChange={handleChange}
              name="product_image"
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
    </>
  );
};
