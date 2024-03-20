import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Toast, formatRupiah } from "../../../../utils/GlobalFunction";
import SpecialRequestService from "../../../../services/specialRequest.service";

export const LayananKhususPage = () => {
  const specialRequestService = SpecialRequestService();
  const listlayanan = [
    { id: "1", namaLayaman: "Renovasi taman" },
    { id: "2", namaLayaman: "Pembuatan proyek taman" },
    { id: "3", namaLayaman: "Desain interior berbasis tanaman" },
    { id: "4", namaLayaman: "Konsultasi" },
    { id: "5", namaLayaman: "Layanan lainnya (spesifikasikan)" },
  ];
  const [capVal, setCapVal] = useState();
  const [isAgree, setIsAgree] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const initialFormData = {
    // customer_id: "",
    fullname: "",
    phone_number: "",
    email: "",
    customer_city: "",
    cutomer_address: "",
    service_type: "",
    description: "",
    start_project: "",
    budget_estimation: 0,
    project_location: "",
    photo: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setIsButtonDisabled(!isAgree || !capVal);
  }, [isAgree, capVal]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const addedEvent = await specialRequestService.handleAddRequest(formData);
      if (addedEvent.status === 201) {
        Toast.fire({
          icon: "success",
          title: "Event berhasil ditambah",
        });
        setFormData(initialFormData);
      } else {
        Toast.fire({
          icon: "error",
          title: "yah error",
        });
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
      <div className="container py-4">
        <div className="row">
          <div className="card bg-white">
            <div className="card-body">
              <div className="fs-5 fw-bold text-dark">Form Layanan Khusus</div>
              <hr />
              <div className="mb-4"></div>
              <form role="form" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-lg-4">
                    <div className="mb-0 fs-5 text-dark fw-bold">Data Diri</div>
                    <label className="text-muted mb-4">
                      Lengkapi Data Diri Anda
                    </label>
                    <div className="form-group">
                      <label className="mb-1 label-for-input">
                        Nama Lengkap <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className={`form-control border-2 ${
                          errors.fullname ? "is-invalid" : ""
                        }`}
                        onChange={(e) =>
                          setFormData({ ...formData, fullname: e.target.value })
                        }
                        value={formData.fullname}
                        name="fullname"
                      />
                      {errors.fullname && (
                        <div className="invalid-feedback">
                          {errors.fullname}
                        </div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1 label-for-input">
                            No Telp <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className="form-control border-2"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone_number: e.target.value,
                              })
                            }
                            value={formData.phone_number}
                            name="phone_number"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1 label-for-input">Email</label>
                          <input
                            type="text"
                            className="form-control border-2"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            value={formData.email}
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="mb-1 label-for-input">
                          kota/tempat Tinggal
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="form-control border-2"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customer_city: e.target.value,
                            })
                          }
                          value={formData.customer_city}
                          name="customer_city"
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 label-for-input">
                          Alamat Rumah
                        </label>
                        <textarea
                          className="form-control border-2"
                          style={{ height: "85px" }}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              cutomer_address: e.target.value,
                            })
                          }
                          value={formData.cutomer_address}
                          name="cutomer_address"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="vr h-100"></div>
                  </div>
                  <div className="col-lg-7">
                    <div className="mb-0 fs-5 text-dark fw-bold text-break">
                      Kebutuhan/Pesan Khusus
                    </div>
                    <label className="text-muted mb-4">
                      Lengkapi Kebutuhan Anda
                    </label>
                    <div className="form-group">
                      <label className="mb-1 label-for-input">
                        Jenis Layanan yang Diminta
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select  mb-3 border-2"
                        style={{ fontSize: "1.1em" }}
                        name="service_type"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service_type: e.target.value,
                          })
                        }
                      >
                        <option
                          style={{ fontSize: "1.1em" }}
                          value=""
                          disabled
                          selected
                        >
                          --Pilih Jenis Request
                        </option>
                        {listlayanan.map((data, index) => (
                          <option
                            style={{ fontSize: "1.1em" }}
                            value={data.namaLayaman}
                            key={index}
                          >
                            {data.namaLayaman}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="mb-1 label-for-input">
                        Deskripsi Kebutuhan
                        <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control border-2"
                        required
                        style={{ height: "125px" }}
                        name="description"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        value={formData.description}
                      ></textarea>
                    </div>
                    <div className="row">
                      {formData.service_type != "Konsultasi" && (
                        <>
                          <div className="col-4">
                            <div className="form-group">
                              <label className="mb-1 label-for-input">
                                Tanggal yang Diinginkan
                              </label>
                              <input
                                type="date"
                                className="form-control border-2"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    start_project: e.target.value,
                                  })
                                }
                                value={formData.start_project}
                                name="start_project"
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="form-group">
                              <label className="mb-1 label-for-input">
                                Budget Estimasi
                              </label>
                              <input
                                type="text"
                                className="form-control border-2"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    budget_estimation:
                                      e.target.value !== ""
                                        ? parseInt(
                                            e.target.value.replace(/\D/g, ""),
                                            10
                                          )
                                        : 0,
                                  })
                                }
                                value={formatRupiah(
                                  formData.budget_estimation,
                                  0
                                )}
                                onKeyPress={(event) => {
                                  if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                  }
                                }}
                                name="budget_estimation"
                              />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="form-group">
                              <label className="mb-1 label-for-input">
                                Lokasi Proyek
                              </label>
                              <input
                                type="text"
                                className="form-control border-2"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    project_location: e.target.value,
                                  })
                                }
                                value={formData.project_location}
                                name="project_location"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="mb-1 label-for-input">
                              Lampiran Foto
                            </label>
                            <input
                              type="file"
                              className="form-control border-2"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  photo: e.target.files[0],
                                })
                              }
                              name="photo"
                            />
                          </div>
                        </>
                      )}
                      <div className="">
                        <input
                          className="form-check-input border border-2"
                          type="checkbox"
                          id="agree"
                          onChange={(e) => setIsAgree(e.target.checked)}
                        />
                        <label className="text-muted mb-4" htmlFor="agree">
                          Setujui Syarat dan Ketentuan
                        </label>
                      </div>
                      <ReCAPTCHA
                        sitekey="6LeQBXcpAAAAALBTBIpN59SBTZXEiRXFswSSYbBt"
                        onChange={(val) => setCapVal(val)}
                      />
                      <div className="form-group text-end">
                        <button
                          type="submit"
                          className="btn btn-success w-25"
                          disabled={isButtonDisabled}
                        >
                          Kirim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
