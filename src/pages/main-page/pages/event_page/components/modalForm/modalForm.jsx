import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ModalForm = ({ title }) => {
  const navigate = useNavigate();
  const initDataPendaftar = {
    nama: "",
    notelp: "",
    email: "",
  };

  const [formData, setFormData] = useState(initDataPendaftar);
  const [errors, setErrors] = useState({});

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
    const requiredFields = ["nama", "notelp", "email"];
    const newErrors = {};
    
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace("_", " ")} is required.`;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(newErrors);
      return;
    }
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    // try {
    //   const addedProduct = await productService.handleAddProduct(payload);
    //   Toast.fire({
    //     icon: "success",
    //     title: "Product berhasil ditambah",
    //   });
    //   return addedProduct;
    // } catch (error) {
    //   Toast.fire({
    //     icon: "error",
    //     title: `${error}`,
    //   });
    //   console.error("Error adding product:", error);
    // }
  };

  const openModal = () => {
    setFormData(initDataPendaftar)
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
                    name="nama"
                    onChange={handleChange}
                    value={formData.nama}
                    className={`form-control ${errors.nama ? "is-invalid" : ""}`}
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
                    onChange={handleChange}
                    value={formData.notelp}
                    className={`form-control ${errors.notelp ? "is-invalid" : ""}`}
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
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder=""
                    aria-describedby="helpId"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
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
