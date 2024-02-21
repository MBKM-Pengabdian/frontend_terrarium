import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../../../../../../utils/GlobalFunction";
import EventService from "../../../../../../services/event.service";

export const ModalForm = ({ title, idEvent }) => {
  const navigate = useNavigate();
  const eventService = EventService();
  const initDataPendaftar = {
    customer_id: localStorage.getItem("customer_id"),
    event_id: idEvent,
    fullname_customer: "",
    notelp: "",
    email_customer: "",
  };

  const [formData, setFormData] = useState(initDataPendaftar);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const addedProduct = await eventService.handleRegisterEvent(formData);
      Toast.fire({
        icon: "success",
        title: "Product berhasil ditambah",
      });
      return addedProduct;
    } catch (error) {
      if (error.response.status === 400) {
        return Toast.fire({
          icon: "error",
          title: `Anda sudah terdaftar di event ini!`,
        });
      }
      Toast.fire({
        icon: "error",
        title: `${error}`,
      });
      console.error("Error adding product:", error);
    }
  };

  const openModal = () => {
    setFormData(initDataPendaftar);
    const isAuthenticated = localStorage.getItem("accessToken_customer");
    if (!isAuthenticated) {
      navigate("/user-login");
      return;
    }

    var modal = new bootstrap.Modal(document.getElementById("modalDaftar"));
    modal.show();
  };

  return (
    <>
      <button
        className="btn bg-primary text-light w-100 fw-bold fs-6"
        type="button"
        // data-bs-toggle="modal"
        // data-bs-target="#modalDaftar"
        onClick={() => openModal()}
      >
        Daftar Sekarang
      </button>

      <div
        className="modal fade"
        id="modalDaftar"
        tabIndex="-1"
        aria-labelledby="modalLabelDaftar"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalLabelDaftar">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form role="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Nama Lengkap</label>
                  <input
                    type="text"
                    name="full_name"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullname_customer: e.target.value,
                      })
                    }
                    value={formData.nama}
                    className={`form-control ${
                      errors.nama ? "is-invalid" : ""
                    }`}
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  {errors.nama && (
                    <div className="invalid-feedback">{errors.nama}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="">No Telp/WA</label>
                  <input
                    type="text"
                    name="notelp"
                    onChange={(e) =>
                      setFormData({ ...formData, notelp: e.target.value })
                    }
                    value={formData.notelp}
                    className={`form-control ${
                      errors.notelp ? "is-invalid" : ""
                    }`}
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  {errors.notelp && (
                    <div className="invalid-feedback">{errors.notelp}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email_customer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email_customer: e.target.value,
                      })
                    }
                    value={formData.email_customer}
                    className={`form-control ${
                      errors.email_customer ? "is-invalid" : ""
                    }`}
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  {errors.email_customer && (
                    <div className="invalid-feedback">
                      {errors.email_customer}
                    </div>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Batal
                  </button>
                  <button type="submit" className="btn btn-success">
                    Daftar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
